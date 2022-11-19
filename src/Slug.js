import { generateSlug } from "random-word-slugs";

// interface SlugCLIProps {
//   param?: number;
// }

export function SlugCLI(param = 10) {
  const myArgs = process.argv.slice(2);

  let final = [];
  let value = 0;

  myArgs.length === 0 ? (value = Number(param)) : (value = Number(myArgs[0]));

  if (value) {
    for (let i = 0; i < value; i++) {
      final.push(generateSlug());
    }
  } else {
    final = "Valor Invalido, são aceito apenas numeros";
  }
  console.log(final); // Para aparecer no console quando rodar o script
  return final;
}

SlugCLI();
