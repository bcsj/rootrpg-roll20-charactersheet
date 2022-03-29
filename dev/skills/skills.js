on("change:repeating_skills:display-flag", function(ev) {
    let key = get_repeating_key(ev);
    let attrs = {};
    attrs[`repeating_skills_${key}_skill-rule-display`] = ev.newValue == "on" ? "1" : "0";
    setAttrs(attrs);
});