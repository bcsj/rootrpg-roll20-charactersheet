/* General clear overlay */
function clear_overlay() {
	setAttrs({
		'overlay-visible': "0",
		'overlay-add-drive': "0"
	});
	getSectionIDs("repeating_add-drives", function(idarray) {
		for(var k=0; k < idarray.length; k++) {
			removeRepeatingRow("repeating_add-drives_" + idarray[k]);
		}
	});
}
on("clicked:close-overlay", clear_overlay);

/* Add drives */
on("clicked:add-drive", function() {
	setAttrs({
		'overlay-visible': "1",
		'overlay-add-drive': "1"
	});
	getAttrs(["class"], function(val) {
		let attrs = {};
		Object.keys(driveOptions).forEach(key => {
			let id = generateRowID();
			let playerclass = val['class'];
			let isstartingdrive = classProperties[playerclass]['drives start'].indexOf(key) > -1;
			attrs["repeating_add-drives_" + id + "_drive-is-starting"] = isstartingdrive ? "1" : "0";
			attrs["repeating_add-drives_" + id + "_add-drive-key"] = key;
			attrs["repeating_add-drives_" + id + "_add-drive-title"] = driveOptions[key]['title'];
			attrs["repeating_add-drives_" + id + "_add-drive-rule"] = driveOptions[key]['rule'];
		});
		setAttrs(attrs);
	});
});
on("clicked:repeating_add-drives:add-the-drive", function(ev) {
	let key = get_repeating_key(ev);
	let kAttr = `repeating_add-drives_${key}_add-drive-key`;
	getAttrs([kAttr], function(val) {
		let driveKey = val[kAttr];
		let attrs = {};
		let id = generateRowID();
		attrs["repeating_drives_" + id + "_drive-title"] = driveOptions[driveKey]['title'];
		attrs["repeating_drives_" + id + "_drive-rule"] = driveOptions[driveKey]['rule'];
		setAttrs(attrs);
		clear_overlay();
	});
});