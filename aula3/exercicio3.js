/* 
 3. - Escreva um programa que lê (em 4 variáveis), o início (horas e minutos) e o término (horas e
 minutos) de um jogo. Chame uma função que receba esses valores por parâmetro e retorne a
 duração total do jogo (em minutos), considerando que o tempo máximo de duração do jogo é de 24
 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.
 */

const { fCalculaTempoDeJogo } = require("./functions/funcoes");
const prompt = require("prompt-sync")();

const entrada = prompt("Digite o inicio e o fim: (hh mm hh mm) ");

const [horaInicio, minutoInicio, horaFim, minutoFim] = entrada.split(" ").map(Number);

console.log(`Duração do jogo: ${fCalculaTempoDeJogo(horaInicio, minutoInicio, horaFim, minutoFim)} minutos`);



 