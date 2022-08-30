"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomSlugs = void 0;
const random_word_slugs_1 = require("random-word-slugs");
function generateRandomSlugs(amount) {
    const slugArray = [];
    for (let i = 0; i < amount; ++i) {
        slugArray.push((0, random_word_slugs_1.generateSlug)());
    }
    return slugArray;
}
exports.generateRandomSlugs = generateRandomSlugs;
console.log(generateRandomSlugs(10));
//# sourceMappingURL=slug.js.map