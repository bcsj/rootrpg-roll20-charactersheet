/* Repeating section cleanup method */
clearList.push({
    'name': "add-drive",
    'repeating_section': "repeating_add-drives"
});

/* Add drives */
on("clicked:add-drive", function() {
	getAttrs(["class"], function(val) {
		let attrs = {};
        attrs['overlay-visible'] = "1";
		attrs['overlay-add-drive'] = "1";
        attrs['overlay-header'] = "Add Drive";
        
        let playerClass = val['class'];
        let classDrives = vagabonds[playerClass]['drives'].map( e => e['name'] );
        let currDrives = [];
        getSectionIDs('repeating_drives', function(idarray) {
            list = [];
            for(var k=0; k < idarray.length; k++) {
                list.push(`repeating_drives_${idarray[k]}_drive-title`);
            }
            getAttrs(list, function(val) {
                currDrives = Object.values(val);
                
                classDrives.forEach(key => {
                    if (currDrives.indexOf(key) == -1) {
                        let id = generateRowID();
                        attrs["repeating_add-drives_" + id + "_drive-is-starting"] = "1";
                        attrs["repeating_add-drives_" + id + "_add-drive-key"] = key;
                        attrs["repeating_add-drives_" + id + "_add-drive-title"] = key;
                        attrs["repeating_add-drives_" + id + "_add-drive-rule"] = drives[key]['text'];
                    }
                });
                    
                Object.keys(drives).forEach(key => {
                    if (currDrives.indexOf(key) == -1 && classDrives.indexOf(key) == -1) {
                        let id = generateRowID();
                        attrs["repeating_add-drives_" + id + "_drive-is-starting"] = "0";
                        attrs["repeating_add-drives_" + id + "_add-drive-key"] = key;
                        attrs["repeating_add-drives_" + id + "_add-drive-title"] = key;
                        attrs["repeating_add-drives_" + id + "_add-drive-rule"] = drives[key]['text'];
                    }
                });
                setAttrs(attrs);
            });
        });
	});
});
on("clicked:repeating_add-drives:add-the-drive", function(ev) {
	let key = get_repeating_key(ev);
	let kAttr = `repeating_add-drives_${key}_add-drive-key`;
	getAttrs([kAttr], function(val) {
		let dkey = val[kAttr];
		let attrs = {};
		let id = generateRowID();
		attrs["repeating_drives_" + id + "_drive-title"] = dkey;
		attrs["repeating_drives_" + id + "_drive-rule"] = drives[dkey]['text'];
		setAttrs(attrs);
		clear_overlay();
	});
});