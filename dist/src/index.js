"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  doSomeStuff: () => doSomeStuff
});
module.exports = __toCommonJS(src_exports);
console.log("Try npm run lint/fix!");
const longString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.";
const trailing = "Semicolon";
const why = { am: "I tabbed?" };
const iWish = "I didn't have a trailing space...";
const sicilian = true;
;
const vizzini = !!sicilian ? !!!sicilian : sicilian;
const re = /foo   bar/;
function doSomeStuff(withThis, andThat, andThose) {
  if (!Boolean(andThose.length)) {
    return false;
  }
  console.log(withThis);
  console.log(andThat);
  console.dir(andThose);
  console.log(longString, trailing, why, iWish, vizzini, re);
  return;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  doSomeStuff
});
//# sourceMappingURL=index.js.map
