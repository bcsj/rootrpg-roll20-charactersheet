/* Repeating section cleanup method */
clearList.push({
    'name': "add-move",
    'repeating_section': "repeating_add-moves"
});

/* Add moves */
on("clicked:add-move", function() {
	getAttrs(["class"], function(val) {
		let attrs = {};
        attrs['overlay-visible'] = "1";
		attrs['overlay-add-move'] = "1";
        attrs['overlay-header'] = "Add Move";
        
        let playerClass = val['class'];
        let classMoves = vagabonds[playerClass]['moves'].map( e => e['name'] );
        let currMoves = [];
        getSectionIDs('repeating_moves', function(idarray) {
            list = [];
            for(var k=0; k < idarray.length; k++) {
                list.push(`repeating_moves_${idarray[k]}_move-title`);
            }
            getAttrs(list, function(val) {
                currMoves = Object.values(val);
                
                classMoves.forEach(key => {
                    if (currMoves.indexOf(key) == -1) {
                        let id = generateRowID();
                        attrs["repeating_add-moves_" + id + "_move-is-starting"] = "1";
                        attrs["repeating_add-moves_" + id + "_add-move-key"] = key;
                        attrs["repeating_add-moves_" + id + "_add-move-title"] = key;
                        attrs["repeating_add-moves_" + id + "_add-move-rule"] = moves[key]['text'];
                    }
                });
                    
                Object.keys(moves).forEach(key => {
                    if (currMoves.indexOf(key) == -1 && classMoves.indexOf(key) == -1) {
                        let id = generateRowID();
                        attrs["repeating_add-moves_" + id + "_move-is-starting"] = "0";
                        attrs["repeating_add-moves_" + id + "_add-move-key"] = key;
                        attrs["repeating_add-moves_" + id + "_add-move-title"] = key;
                        attrs["repeating_add-moves_" + id + "_add-move-rule"] = moves[key]['text'];
                    }
                });
                setAttrs(attrs);
            });
        });
	});
});
on("clicked:repeating_add-moves:add-the-move", function(ev) {
	let key = get_repeating_key(ev);
	let kAttr = `repeating_add-moves_${key}_add-move-key`;
	getAttrs([kAttr], function(val) {
		let dkey = val[kAttr];
		let attrs = {};
		let id = generateRowID();
		attrs["repeating_moves_" + id + "_move-title"] = dkey;
		attrs["repeating_moves_" + id + "_move-rule"] = moves[dkey]['text'];
		setAttrs(attrs);
		clear_overlay();
	});
});