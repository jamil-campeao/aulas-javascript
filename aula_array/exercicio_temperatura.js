/*
Análise de Temperaturas Anuais

Você foi contratado por uma empresa meteorológica para desenvolver um sistema que auxilie no monitoramento das temperaturas médias mensais ao longo do ano. A empresa precisa armazenar as temperaturas médias de cada mês, analisar os dados e fornecer um relatório com as seguintes informações:

- A menor temperatura média do ano e o mês em que ela ocorreu.

- A maior temperatura média do ano e o mês em que ela ocorreu.

- A temperatura média anual, calculada com base nas temperaturas médias de todos os meses.

Requisitos

- O programa deve ler e armazenar as temperaturas médias de cada mês (total de 12 meses).

- O sistema deve calcular e exibir:

     - A menor temperatura média e o mês correspondente.

     - A maior temperatura média e o mês correspondente.

     - A temperatura média anual (a média das temperaturas dos 12 meses).

- O mês pode ser apresentado de forma numérica (1 para janeiro, 2 para fevereiro, e assim por diante).

Instruções:

- Estruturas de dados: Utilize uma estrutura apropriada (como arrays ou vetores) para armazenar as temperaturas mensais. Escolha a que você julgar mais adequada.

- Entrada de dados: O usuário deve inserir as temperaturas médias de cada um dos 12 meses do ano.

- Processamento: O programa deve calcular e identificar a menor e a maior temperatura média, além de calcular a temperatura média anual.
*/
const prompt = require("prompt-sync")();
let mediaTemperaturas = [];
let mediaTemperaturasOld = [];
let soma = 0;

for(let i = 0; i < 12; i++) {
    mediaTemperaturas[i] = Number(prompt(`Digite a temperatura do mês ${i + 1}: `));
    soma += mediaTemperaturas[i];
}
let mediaAnual = soma / 12;
mediaTemperaturasOld = mediaTemperaturas.slice(0, mediaTemperaturas.length - 1);


mediaTemperaturas.sort((a, b) => a - b);

console.log(`Menor média de temperatura: ${mediaTemperaturas[0]}, ocorrida no mês ${mediaTemperaturasOld.indexOf(mediaTemperaturas[0]) + 1}`)
console.log(`Maior média de temperatura: ${mediaTemperaturas[mediaTemperaturas.length - 1]}, ocorrida no mês: ${mediaTemperaturasOld.indexOf(mediaTemperaturas[mediaTemperaturas.length - 1]) + 1}`)
console.log(`Média de temperatura anual: ${mediaAnual.toFixed(2)}`);