/* 
1. Simulador de Conta de Energia Elétrica: Você deve desenvolver um sistema que calcule o valor
 da conta de energia elétrica baseado no consumo em kWh.
 Requisitos:- Solicitar o nome do cliente e o consumo em kWh.- Tarifas:
 • Até 100 kWh: R$ 0,50/kWh
 • De 101 a 200 kWh: R$ 0,70/kWh
 • Acima de 200 kWh: R$ 0,87/kWh- Criar uma função que receba por parâmetro o consumo e calcule e retorne o valor da conta- Exibir o valor total da conta com 2 casas decimais (toFixed(2)).

*/

const prompt = require("prompt-sync")();
const {fCalculaTarifa} = require('./functions/funcoes.js');

const nomeCliente = prompt("Digite o nome do cliente: ");
const consumoKWH = Number(prompt("Digite o consumo em KWh: "));

console.log(`O valor da tarifa do cliente: ${nomeCliente} é: ${fCalculaTarifa(consumoKWH).toFixed(2)}`);