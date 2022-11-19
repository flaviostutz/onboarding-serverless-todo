import { SlugCLI } from './Slug.js'
// const slug = require('./Slug.js')
// const { SlugCLI } = slug

describe("SlugCLI returns the right amount of words", () => {
    test("should return 10 words if no parameters are passed", () => {
        console.log(SlugCLI())
        expect(SlugCLI().length).toBe(10)
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
        (fixture, result) => expect(SlugCLI(fixture).length).toBe(result)
    );
})