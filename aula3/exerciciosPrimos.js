const { fVerificaSeNumeroEhPrimo } = require('./functions/funcoes.js');
const prompt = require('prompt-sync')();

fVerificaSeNumeroEhPrimo(Number(prompt("Digite um número: "))) == false ? console.log("Número não é primo") : console.log("Número é primo");

