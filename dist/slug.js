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
var slug_exports = {};
__export(slug_exports, {
  generateRandomSlugs: () => generateRandomSlugs
});
module.exports = __toCommonJS(slug_exports);
var import_random_word_slugs = require("random-word-slugs");
function generateRandomSlugs(amount) {
  const slugArray = [];
  for (let i = 0; i < amount; ++i) {
    slugArray.push((0, import_random_word_slugs.generateSlug)());
  }
  console.log(slugArray);
  return slugArray;
}
generateRandomSlugs(10);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateRandomSlugs
});
//# sourceMappingURL=slug.js.map
