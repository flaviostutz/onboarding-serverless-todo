import { generateSlug } from 'random-word-slugs';

export function generateRandomSlugs(amount: number): string[] {
  const slugArray: string[] = [];
  for (let i = 0; i < amount; ++i) {
    slugArray.push(generateSlug());
  }
  console.log(slugArray);
  return slugArray;

}

generateRandomSlugs(10);
