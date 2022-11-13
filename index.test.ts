const wordsSlug = require('random-word-slugs')
const { generateSlug } = wordsSlug

describe("generateSlug returns the right amount of words", () => {
    test("should return 3 words if no parameters are passed", () => {
        expect(generateSlug().split('-').length).toBe(3)
    })

    const expectedAmountOfWords = [
        [4, 4],
        [5, 5],
        [2, 2],
        [6, 6],
        [7, 7],
        [8, 8],
    ]

    test.each(expectedAmountOfWords)(
        "given %j as param it generate %j words",
        (fixture, result) => expect(generateSlug(fixture).split('-').length).toBe(result)
    );
})