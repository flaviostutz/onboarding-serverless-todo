import { generateSlug } from "random-word-slugs";

export function SlugCLI(param = 10) {
  const myArgs = process.argv.slice(2);

  let final = [];
  let value = 0;

  console.log("args: " + myArgs.length);
  myArgs.length === 0 ? (value = Number(param)) : (value = Number(myArgs[0]));
  console.log(value);

  if (value) {
    for (let i = 0; i < value; i++) {
      final.push(generateSlug());
    }
  } else {
    final = "Valor Invalido, são aceito apenas numeros";
  }
  console.log(final);
  return final;
}

SlugCLI();
