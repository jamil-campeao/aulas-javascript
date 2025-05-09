/*
Controle de Estoque Simples

Uma pequena loja deseja controlar o estoque de seus produtos. Você deve escrever um programa que permita cadastrar a quantidade em estoque de 5 produtos diferentes e depois verificar qual produto está com o menor e o maior estoque.

Requisitos:

- Usar prompt para entrada de dados no console.

- Utilizar arrays para armazenar os estoques.

- Utilizar funções para:

      - Cadastrar as quantidades no estoque.

      - Encontrar o maior e menor valor.

Exibir os dados no console.
*/
const prompt = require("prompt-sync")();
let estoqueProduto = [];

for(let i = 0; i < 5; i++) {
    estoqueProduto[i] = Number(prompt(`Digite o estoque do produto ${i + 1}: `));
}

estoqueProduto.sort((a, b) => a - b);

console.log(`Menor valor de estoque ${estoqueProduto[0]}`)
console.log(`Maior valor de estoque ${estoqueProduto[estoqueProduto.length - 1]}`)


