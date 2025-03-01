//// [cb.js]
/** @template T
 * @callback Id
 * @param {T} t
 * @returns {T} Maybe just return 120 and cast it?
 */ import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var x = 1;
/** @type {Id<string>} I actually wanted to write `const "120"` */ var one_twenty = function(s) {
    return "120";
};
/** @template S
 * @callback SharedId
 * @param {S} ego
 * @return {S}
 */ var SharedClass = function SharedClass() {
    "use strict";
    _class_call_check(this, SharedClass);
    /** @type {SharedId<S>} */ this.id;
};
/** @type {SharedId<number>} */ var outside = function(n) {
    return n + 1;
};
/** @type {Final<{ fantasy }, { heroes }>} */ var noreturn = function(barts, tidus, noctis) {
    return "cecil" /**
 * @template V,X
 * @callback Final
 * @param {V} barts - "Barts"
 * @param {X} tidus - Titus
 * @param {X & V} noctis - "Prince Noctis Lucius Caelum"
 * @return {"cecil" | "zidane"}
 */ ;
};
