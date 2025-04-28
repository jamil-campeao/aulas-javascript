/* 
 4. Um professor, muito legal, fez 3 provas durante um semestre mas só vai levar em conta as duas
 notas mais altas para calcular a média. Faça um programa que peça o valor das 3 notas, e chame
 uma função que receba as três notas por parâmetro e escreva a média com as 2 notas mais altas,
 bem como sua nota mais alta e sua nota mais baixa.
 */

const { fCalculaMediaNotasMaisAltas } = require("./functions/funcoes.js");
const prompt = require("prompt-sync")();

const [nota1, nota2, nota3] = prompt("Digite as 3 notas do aluno: ").split(" ").map(Number);

console.log(`Média das notas mais altas: ${fCalculaMediaNotasMaisAltas(nota1, nota2, nota3)}`);




 