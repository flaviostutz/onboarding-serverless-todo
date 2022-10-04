import think from 'cowsay';
import { generateSlug } from 'random-word-slugs';

  console.log(think.say({ text: generateSlug() }));
