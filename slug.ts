import { generateSlug } from 'random-word-slugs';

export function generateRandomSlugs(amount: number): string[] {
    const slugArray: string[] = [];
    for (let i = 0; i < amount; ++i) {
        slugArray.push(generateSlug());
    }
    return slugArray as string[];
}

console.log(generateRandomSlugs(10));