on("change:repeating_moves:display-flag", function(ev) {
    let key = get_repeating_key(ev);
    let attrs = {};
    attrs[`repeating_moves_${key}_move-rule-display`] = ev.newValue == "on" ? "1" : "0";
    setAttrs(attrs);
});