function rep_track_incr(tname, delta) {
    let tlength = (tname == "notoriety") ? 9 : 15;
    return function(ev) {
        let key = get_repeating_key(ev);
        let tAttr =`repeating_reputation-track_${key}_char-${tname}`;
        getAttrs([tAttr], function(val) {
            let attr = {};
            let nval = parseInt(val[tAttr]) + delta;
            nval = nval < 0 ? 0 : nval;
            attr[tAttr] = nval <= tlength ? nval : tlength;
            setAttrs(attr);
        });
    }
}
on("clicked:repeating_reputation-track:incr-notoriety", rep_track_incr('notoriety', 1));
on("clicked:repeating_reputation-track:incr-prestige", rep_track_incr('prestige', 1));
on("clicked:repeating_reputation-track:decr-notoriety", rep_track_incr('notoriety', -1));
on("clicked:repeating_reputation-track:decr-prestige", rep_track_incr('prestige', -1));

function rep_update(tname) {
    let tlength = (tname == "notoriety") ? 9 : 15;
    let trepstep = (tname == "notoriety") ? -1 : 1;
    let ttol = (tname == "notoriety") ?
        (rep) => (rep >= 0 ? 3 : 3*(1-rep)) :
        (rep) => (rep <= 0 ? 5 : 5*(1+rep));
    return function(ev){
        let key = get_repeating_key(ev);
        let repAttr =`repeating_reputation-track_${key}_char-reputation`;
        let tAttr =`repeating_reputation-track_${key}_char-${tname}`;
        getAttrs([repAttr, tAttr], function(vals) {
            let attr = {};
            let rep = parseInt(vals[repAttr]);
            let tval = parseInt(vals[tAttr]);
            let tolerance = ttol(rep);
            if (tval >= tolerance) {
                let diff = tval - tolerance;
                rep += trepstep;
                tval = diff;
                attr[repAttr] = rep;
                attr[tAttr] = tval;
            }
            for (let k = 1; k <= tlength; k++) {
                let attrKey = `repeating_reputation-track_${key}_char-${tname}-${k}`;
                attr[attrKey] = k <= tval ? 1 : 0;
            }
            setAttrs(attr);
        });
    }
}
let trigger_prefix = "change:repeating_reputation-track:char-reputation " +
    "change:repeating_reputation-track:char-";
on(trigger_prefix + "notoriety", rep_update('notoriety'));
on(trigger_prefix + "prestige", rep_update('prestige'));