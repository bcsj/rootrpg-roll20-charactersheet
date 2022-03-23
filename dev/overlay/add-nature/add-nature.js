/* Repeating section cleanup method */
clearList.push({
    'name': "add-nature",
    'repeating_section': "repeating_add-nature"
});

/* Add nature */
on("clicked:add-nature", function() {
	setAttrs({
		'overlay-visible': "1",
		'overlay-add-nature': "1"
	});
	getAttrs(["class"], function(val) {
		let attrs = {};
		Object.keys(natures).forEach(key => {
			let id = generateRowID();
			let playerClass = val['class'];
            let classNatures = vagabonds[playerClass]['natures'].map( e => e['name'] );
			let isStartingNature =  classNatures.indexOf(key) > -1;
			attrs["repeating_add-nature_" + id + "_nature-is-starting"] = isStartingNature ? "1" : "0";
			attrs["repeating_add-nature_" + id + "_add-nature-key"] = key;
			attrs["repeating_add-nature_" + id + "_add-nature-title"] = key;
			attrs["repeating_add-nature_" + id + "_add-nature-rule"] = natures[key]['text'];
		});
		setAttrs(attrs);
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