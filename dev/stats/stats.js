let statsNameList = ["charm", "cunning", "finesse", "luck", "might"];

statsNameList.forEach(function(stat) {
    on(`change:${stat}-base change:${stat}-bonus`, function() {
        getAttrs([`${stat}-base`, `${stat}-bonus`], function (val) {
            let base = parseInt(val[`${stat}-base`]);
            let bonus = parseInt(val[`${stat}-bonus`]);
            let attrs = {};
            attrs[`${stat}`] = base + bonus;
            setAttrs(attrs);
        });
    });
});

on("change:stats-edit-mode", function(ev) {
   console.log(ev); 
   let attrs = {};
   let val = ev.newValue == "on" ? "1" : "0";
   attrs["charm-edit"] = val;
   attrs["cunning-edit"] = val;
   attrs["finesse-edit"] = val;
   attrs["luck-edit"] = val;
   attrs["might-edit"] = val;
   setAttrs(attrs);
});