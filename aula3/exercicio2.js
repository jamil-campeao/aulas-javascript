/* 
 2. Um número é considerado perfeito quando ele é igual à soma de seus divisores (excluindo ele
 mesmo). Por exemplo, o número 28 tem os divisores 1, 2, 4, 7 e 14. A soma deles é:
 1 + 2 + 4 + 7 + 14 = 28. Portanto, 28 é um número perfeito. Faça um programa que leia um número
 e chame uma função que receba esse número por parâmetro e retorne true se ele for um número
 perfeito, e false caso não seja. Escreva o resultado.
 */

const prompt = require("prompt-sync")();
const { fVerificaSeNumeroEhPerfeito } = require('./functions/funcoes.js');

fVerificaSeNumeroEhPerfeito(Number(prompt("Digite um número: "))) == true ? console.log("Número é perfeito"): console.log("Número não é perfeito");
