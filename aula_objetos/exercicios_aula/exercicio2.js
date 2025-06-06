const prompt = require("prompt-sync")();

const filmes = [];

const qtdFilmes = Number(prompt("Digite a quantidade de filmes que deseja armazenar: "));

for ( let i = 0; i < qtdFilmes; i++) {
    const titulo = prompt(`Informe o nome do filme ${i+1}: `);
    const diretor = prompt(`Informe o diretor do filme ${i+1}: `);
    const ano = prompt(`Informe o ano do filme ${i+1}: `);

    filmes.push({
        titulo,
        diretor,
        ano
    });
}


for (let j = 0; j < filmes.length; j++) {
    console.log(`Filme ${j + 1}:`);
    console.log(`Título: ${filmes[j].titulo}`);
    console.log(`Diretor: ${filmes[j].diretor}`);
    console.log(`Ano: ${filmes[j].ano}`);
    console.log('-------------------');
}
