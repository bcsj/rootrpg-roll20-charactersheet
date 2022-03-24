/* Repeating section cleanup method */
clearList.push({
    'name': "add-nature",
    'repeating_section': "repeating_add-nature"
});

/* Add nature */
on("clicked:add-nature", function() {
	getAttrs(["class"], function(val) {
		let attrs = {};
        attrs['overlay-visible'] = "1";
		attrs['overlay-add-nature'] = "1";
        attrs['overlay-header'] = "Add Nature";
        
        let playerClass = val['class'];
        let classNatures = vagabonds[playerClass]['natures'].map( e => e['name'] );
        let currNatures = [];
        getSectionIDs('repeating_natures', function(idarray) {
            list = [];
            for(var k=0; k < idarray.length; k++) {
                list.push(`repeating_natures_${idarray[k]}_nature-title`);
            }
            getAttrs(list, function(val) {
                currNatures = Object.values(val);
               
                classNatures.forEach(key => {
                    if (currNatures.indexOf(key) == -1) {
                        let id = generateRowID();
                        attrs["repeating_add-nature_" + id + "_nature-is-starting"] = "1";
                        attrs["repeating_add-nature_" + id + "_add-nature-key"] = key;
                        attrs["repeating_add-nature_" + id + "_add-nature-title"] = key;
                        attrs["repeating_add-nature_" + id + "_add-nature-rule"] = natures[key]['text'];
                    }
                });
                
                Object.keys(natures).forEach(key => {
                    if (currNatures.indexOf(key) == -1 && classNatures.indexOf(key) == -1) {
                        let id = generateRowID();
                        attrs["repeating_add-nature_" + id + "_nature-is-starting"] = "0";
                        attrs["repeating_add-nature_" + id + "_add-nature-key"] = key;
                        attrs["repeating_add-nature_" + id + "_add-nature-title"] = key;
                        attrs["repeating_add-nature_" + id + "_add-nature-rule"] = natures[key]['text'];
                    }
                });
                setAttrs(attrs);
            });
        });
	});
});
on("clicked:repeating_add-nature:add-the-nature", function(ev) {
	let key = get_repeating_key(ev);
	let kAttr = `repeating_add-nature_${key}_add-nature-key`;
	getAttrs([kAttr], function(val) {
		let nkey = val[kAttr];
		let attrs = {};
		let id = generateRowID();
		attrs["repeating_natures_" + id + "_nature-title"] = nkey;
		attrs["repeating_natures_" + id + "_nature-rule"] = natures[nkey]['text'];
		setAttrs(attrs);
		clear_overlay();
	});
});