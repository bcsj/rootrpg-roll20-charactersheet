/* General clear overlay */
let clearList = [];

function clear_overlay() {
    attrs = {};
    attrs['overlay-visible'] = "0";
    clearList.map(function(e) {
        attrs[`overlay-${e['name']}`] = "0";
        if (e.hasOwnProperty('repeating_section')) {
            getSectionIDs(e['repeating_section'], function(idarray) {
                for(var k=0; k < idarray.length; k++) {
                    removeRepeatingRow(e['repeating_section'] + "_" + idarray[k]);
                }
            });
        }
    });
	setAttrs(attrs);
	
}
on("clicked:close-overlay", clear_overlay);