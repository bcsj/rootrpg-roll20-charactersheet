# build.py
import re
import shutil
from pathlib import Path
from os.path import exists
from os import remove

def get_file_dir(fn):
    fn_path = Path(fn).resolve()
    return fn_path.parent

def parse_inline(props, curr_path):
    pieces = [p for p in re.split("( |\\\".*?\\\"|'.*?')", props) if p.strip()]
    ext = dict()
    for i in range(len(pieces)):
        p = pieces[i]
        if p[-1] == '=':
            if p[:-1] == 'src':
                ext['path'] = Path(curr_path, pieces[i+1][1:-1])
                ext['src'] = pieces[i+1][1:-1]
            if p[:-1] == 'only':
                ext['only'] = pieces[i+1][1:-1]
    return ext

def build(filedata, lws = 0):
    fn_html = Path(filedata['path'], filedata['src'] + '.html')
    fn_css = Path(filedata['path'], filedata['src'] + '.css')
    fn_js = Path(filedata['path'], filedata['src'] + '.js')

    issues = 0
    if exists(fn_css):
        print(f" -Detected CSS file: {filedata['src']}")
        f_out = open(tmp_css, 'a')
        f_out.write('\n\n')
        f_out.write('/*************************************\n')
        f_out.write('    ' + filedata['src'] + '\n')
        f_out.write('*************************************/\n')
        f_out.write('\n')
        with open(fn_css) as f:
            line = f.readline()
            while line:
                f_out.write(line)
                line = f.readline()
        f_out.close()
    else:
        if not ('only' in filedata and filedata['only'] != 'css'):
            print(f"!-Failed to find CSS file: {filedata['src']}")
            issues += 1
        
    if exists(fn_js):
        print(f" -Detected JS file: {filedata['src']}")
        f_out = open(tmp_js, 'a')
        f_out.write('\n\n')
        f_out.write('/*************************************\n')
        f_out.write('    ' + filedata['src'] + '\n')
        f_out.write('*************************************/\n')
        f_out.write('\n')
        with open(fn_js) as f:
            line = f.readline()
            while line:
                f_out.write(line)
                line = f.readline()
        f_out.close()
    else:
        if 'only' in filedata and filedata['only'] == 'js':
            print(f"!-Failed to find JS file: {filedata['src']}")
            issues += 1
        
    if exists(fn_html):
        print(f" -Detected HTML file: {filedata['src']}")
        with open(fn_html) as f:
            L = f.readlines()
            with open(tmp_html, 'a') as f_out:
                f_out.write((' ' * lws) + '<!-- ' + filedata['src'] + ' -->\n')
            
            for line in L:
                lws_ = len(line) - len(line.lstrip())
                sp = line.lstrip().split(":")
                if sp[0] == '<!--' and sp[1] == 'external':
                    ext = parse_inline(sp[2].lstrip(), filedata['path'])
                    is_only = 'only' in ext
                    str_only = ext['only'].upper()+'-' if is_only else ''
                    print(f" -Detected external {str_only}reference: {ext['src']}")
                    
                    issues += build(ext, lws_)
                    
                    if not (is_only and ext['only'] != 'html'):
                        with open(tmp_html, 'a') as f_out:
                            f_out.write('\n')
                else:
                    with open(tmp_html, 'a') as f_out:
                        f_out.write((' ' * lws) + line)
    else:
        if not ('only' in filedata and filedata['only'] != 'html'):
            print(f"!-Failed to find HTML file: {filedata['src']}")
            issues += 1

    print(f" -Completed {filedata['src']}")
    return issues
    
def post_process():
    print(" -Moves worker script to html")
    with open(tmp_html, 'a') as f_html:
        f_html.write('<script type="text/worker">\n')
        with open(tmp_js) as f_js:
            for line in f_js:
                f_html.write(line)
        f_html.write('\n\n')
        f_html.write('</script>\n')
    print(" -Worker script moved")   
    print(" -Copies to prod")
    shutil.copyfile(tmp_html, out_html)
    shutil.copyfile(tmp_css, out_css)
    print(" -Done!")
    
def clean(location):
    if location == 'tmp':
        if exists(tmp_html):
            remove(tmp_html)
        if exists(tmp_css):
            remove(tmp_css)
        if exists(tmp_js):
            remove(tmp_js)
    if location == 'out':
        if exists(out_html):
            remove(out_html)
        if exists(out_css):
            remove(out_css)

if __name__ == "__main__":
    src_dir = get_file_dir(__file__)
    
    dev_dir = Path(src_dir,'dev')
    tmp_dir = Path(src_dir,'tmp')
    out_dir = Path(src_dir,'prod')
    
    tmp_html = Path(tmp_dir, 'rootrpg_cs_tmp.html')
    tmp_css  = Path(tmp_dir, 'rootrpg_cs_tmp.css')
    tmp_js   = Path(tmp_dir, 'rootrpg_cs_tmp.js')

    out_html = Path(out_dir, 'rootrpg_cs.html')
    out_css  = Path(out_dir, 'rootrpg_cs.css')

    clean('tmp')
    clean('out')

    core = {
        'path': dev_dir,
        'src': 'core'
    }
    issues = build(core)
    post_process()
    print(f"Completed with {issues} issues")