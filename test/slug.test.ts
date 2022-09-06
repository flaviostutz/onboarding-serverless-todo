import { generateRandomSlugs } from "../src/slug";

describe('generateRandomSlugs', () => {
  test('Generates 3 hyphens seperated words', () => {
    const slugy = generateRandomSlugs(10);
    for (let i = 0; i < slugy.length; ++i) {
      const piecesText = slugy[i].split("-");
      expect(piecesText.length).toBe(3);
    }
  });
  test('The length of the slugs generator', () => {
    const slugy = generateRandomSlugs(10);
    for (let i = 0; i < slugy.length; ++i) {
      expect(slugy.length).toBe(10);
    }
  });
});

