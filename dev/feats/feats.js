on("change:repeating_feats:display-flag", function(ev) {
    let key = get_repeating_key(ev);
    let attrs = {};
    attrs[`repeating_feats_${key}_feat-rule-display`] = ev.newValue == "on" ? "1" : "0";
    setAttrs(attrs);
});