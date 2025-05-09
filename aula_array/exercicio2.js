/* 
1 - 1. Fazer um programa para ler as
 médias de 5 alunos, calcular a média
 geral da turma e escrever quantos
 alunos ficaram acima da média geral
*/

const prompt = require("prompt-sync")();

let mediaAlunos = [];
let soma = 0;
let quantidadeAlunosMediaAcimaDaMedia = 0;

for (let i = 0; i < 5; i++) {
    mediaAlunos[i] = Number(prompt(`Digite a média do aluno ${i + 1}: `));
    soma += mediaAlunos[i]
}

mediaGeral =  soma / 5;


for (let notas of mediaAlunos) {
    if (notas > mediaGeral) {
        quantidadeAlunosMediaAcimaDaMedia++;
    }
}

console.log(`Média da turma: ${mediaGeral.toFixed(2)}`);
console.log(`Quantidade de alunos com médias acima da média da turma: ${quantidadeAlunosMediaAcimaDaMedia}`);


