import think from 'cowsay';
        import { generateSlug } from 'random-word-slugs';

                console.log(think.say({ text: generateSlug() }));
// const test = 'I am a test';
// console.log(`Test: ${test}`);
// const test = 'Another one.';