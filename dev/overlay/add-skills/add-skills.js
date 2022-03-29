/* Repeating section cleanup method */
clearList.push({
    'name': "add-skill",
    'repeating_section': "repeating_add-skills"
});

/* Add skills */
on("clicked:add-skill", function() {
	getAttrs(["class"], function(val) {
		let attrs = {};
        attrs['overlay-visible'] = "1";
		attrs['overlay-add-skill'] = "1";
        attrs['overlay-header'] = "Add Skill";
        
        let playerClass = val['class'];
        let classSkills = vagabonds[playerClass]['skills'].map( e => e['name'] );
        let currSkills = [];
        getSectionIDs('repeating_skills', function(idarray) {
            list = [];
            for(var k=0; k < idarray.length; k++) {
                list.push(`repeating_skills_${idarray[k]}_skill-title`);
            }
            getAttrs(list, function(val) {
                currSkills = Object.values(val);
                
                classSkills.forEach(key => {
                    if (currSkills.indexOf(key) == -1) {
                        let id = generateRowID();
                        attrs["repeating_add-skills_" + id + "_skill-is-starting"] = "1";
                        attrs["repeating_add-skills_" + id + "_add-skill-key"] = key;
                        attrs["repeating_add-skills_" + id + "_add-skill-title"] = key;
                        attrs["repeating_add-skills_" + id + "_add-skill-rule"] = skills[key]['text'];
                    }
                });
                    
                Object.keys(skills).forEach(key => {
                    if (currSkills.indexOf(key) == -1 && classSkills.indexOf(key) == -1) {
                        let id = generateRowID();
                        attrs["repeating_add-skills_" + id + "_skill-is-starting"] = "0";
                        attrs["repeating_add-skills_" + id + "_add-skill-key"] = key;
                        attrs["repeating_add-skills_" + id + "_add-skill-title"] = key;
                        attrs["repeating_add-skills_" + id + "_add-skill-rule"] = skills[key]['text'];
                    }
                });
                setAttrs(attrs);
            });
        });
	});
});
on("clicked:repeating_add-skills:add-the-skill", function(ev) {
	let key = get_repeating_key(ev);
	let kAttr = `repeating_add-skills_${key}_add-skill-key`;
	getAttrs([kAttr], function(val) {
		let dkey = val[kAttr];
		let attrs = {};
		let id = generateRowID();
		attrs["repeating_skills_" + id + "_skill-title"] = dkey;
		attrs["repeating_skills_" + id + "_skill-rule"] = skills[dkey]['text'];
		setAttrs(attrs);
		clear_overlay();
	});
});