const prompt = require('prompt-sync')();

fMostraTabuada(parseInt(prompt("Digite o número para mostrar a tabuada: ")));

function fMostraTabuada(pNumero) {
    for(let i = 1; i <= 10; i++) {
        console.log(pNumero, " X ", i, " = ", pNumero * i);
    }
}