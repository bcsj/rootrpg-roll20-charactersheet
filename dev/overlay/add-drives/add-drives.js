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
                        if (drives[key].hasOwnProperty('namedTarget')) {
                            attrs["repeating_add-drives_" + id + "_add-drive-has-named-target"] = "1";
                        }
                        
                    }
                });
                    
                Object.keys(drives).forEach(key => {
                    if (currDrives.indexOf(key) == -1 && classDrives.indexOf(key) == -1) {
                        let id = generateRowID();
                        attrs["repeating_add-drives_" + id + "_drive-is-starting"] = "0";
                        attrs["repeating_add-drives_" + id + "_add-drive-key"] = key;
                        attrs["repeating_add-drives_" + id + "_add-drive-title"] = key;
                        attrs["repeating_add-drives_" + id + "_add-drive-rule"] = drives[key]['text'];
                        if (drives[key].hasOwnProperty('namedTarget')) {
                            attrs["repeating_add-drives_" + id + "_add-drive-has-named-target"] = "1";
                        } else {
                            attrs["repeating_add-drives_" + id + "_add-drive-has-named-target"] = "0";
                        }
                        attrs["repeating_add-drives_" + id + "_add-drive-named-target"] = "";
                    }
                });
                setAttrs(attrs);
            });
        });
	});
});
on("clicked:repeating_add-drives:add-the-drive", function(ev) {
	let key = get_repeating_key(ev);
	let kAttrs = [
        `repeating_add-drives_${key}_add-drive-key`,
        `repeating_add-drives_${key}_add-drive-named-target`,
    ];
	getAttrs(kAttrs, function(val) {
		let dkey = val[kAttrs[0]];
		let attrs = {};
		let id = generateRowID();
		attrs["repeating_drives_" + id + "_drive-title"] = dkey;
		if (drives[dkey].hasOwnProperty('namedTarget')) {
            let namedTarget = val[kAttrs[1]];
            attrs["repeating_drives_" + id + "_drive-rule"] = "**Target: " + namedTarget + ".** " + drives[dkey]['text'];
        } else {
            attrs["repeating_drives_" + id + "_drive-rule"] = drives[dkey]['text'];
        }
		setAttrs(attrs);
		clear_overlay();
	});
});