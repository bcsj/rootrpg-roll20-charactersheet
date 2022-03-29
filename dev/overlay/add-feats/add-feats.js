/* Repeating section cleanup method */
clearList.push({
    'name': "add-feat",
    'repeating_section': "repeating_add-feats"
});

/* Add feats */
on("clicked:add-feat", function() {
	getAttrs(["class"], function(val) {
		let attrs = {};
        attrs['overlay-visible'] = "1";
		attrs['overlay-add-feat'] = "1";
        attrs['overlay-header'] = "Add Feat";
        
        let playerClass = val['class'];
        let classFeats = vagabonds[playerClass]['feats'].map( e => e['name'] );
        let currFeats = [];
        getSectionIDs('repeating_feats', function(idarray) {
            list = [];
            for(var k=0; k < idarray.length; k++) {
                list.push(`repeating_feats_${idarray[k]}_feat-title`);
            }
            getAttrs(list, function(val) {
                currFeats = Object.values(val);
                
                classFeats.forEach(key => {
                    if (currFeats.indexOf(key) == -1) {
                        let id = generateRowID();
                        attrs["repeating_add-feats_" + id + "_feat-is-starting"] = "1";
                        attrs["repeating_add-feats_" + id + "_add-feat-key"] = key;
                        attrs["repeating_add-feats_" + id + "_add-feat-title"] = key;
                        attrs["repeating_add-feats_" + id + "_add-feat-rule"] = feats[key]['text'];
                    }
                });
                    
                Object.keys(feats).forEach(key => {
                    if (currFeats.indexOf(key) == -1 && classFeats.indexOf(key) == -1) {
                        let id = generateRowID();
                        attrs["repeating_add-feats_" + id + "_feat-is-starting"] = "0";
                        attrs["repeating_add-feats_" + id + "_add-feat-key"] = key;
                        attrs["repeating_add-feats_" + id + "_add-feat-title"] = key;
                        attrs["repeating_add-feats_" + id + "_add-feat-rule"] = feats[key]['text'];
                    }
                });
                setAttrs(attrs);
            });
        });
	});
});
on("clicked:repeating_add-feats:add-the-feat", function(ev) {
	let key = get_repeating_key(ev);
	let kAttr = `repeating_add-feats_${key}_add-feat-key`;
	getAttrs([kAttr], function(val) {
		let dkey = val[kAttr];
		let attrs = {};
		let id = generateRowID();
		attrs["repeating_feats_" + id + "_feat-title"] = dkey;
		attrs["repeating_feats_" + id + "_feat-rule"] = feats[dkey]['text'];
		setAttrs(attrs);
		clear_overlay();
	});
});