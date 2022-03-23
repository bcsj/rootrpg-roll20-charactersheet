/* Repeating section cleanup method */
clearList.push({
    'name': "add-drive",
    'repeating_section': "repeating_add-drives"
});

/* Add drives */
on("clicked:add-drive", function() {
	setAttrs({
		'overlay-visible': "1",
		'overlay-add-drive': "1"
	});
	getAttrs(["class"], function(val) {
		let attrs = {};
		Object.keys(drives).forEach(key => {
			let id = generateRowID();
			let playerClass = val['class'];
            let classDrives = vagabonds[playerClass]['drives'].map( e => e['name'] );
			let isStartingDrive =  classDrives.indexOf(key) > -1;
			attrs["repeating_add-drives_" + id + "_drive-is-starting"] = isStartingDrive ? "1" : "0";
			attrs["repeating_add-drives_" + id + "_add-drive-key"] = key;
			attrs["repeating_add-drives_" + id + "_add-drive-title"] = key;
			attrs["repeating_add-drives_" + id + "_add-drive-rule"] = drives[key]['text'];
		});
		setAttrs(attrs);
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