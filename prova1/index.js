/*
Sistema de Reservas de Poltronas de um Teatro

Um teatro quer informatizar a reserva de poltronas para sessões. Ele tem 3 fileiras de poltronas com 10 poltronas em cada fileira. O sistema deve:

Mostrar as poltronas disponíveis;
Permitir reservar uma poltrona pelo número (fileira e poltrona);
Impedir a reserva de uma poltrona já ocupada;
Exibir o estado atual das poltronas (ocupada ou livre).
Requisitos:

Use um array com valores booleanos (true ou false) ou strings ("livre", "ocupada") para indicar a ocupação das poltronas.
Crie funções para: mostrarPoltronas, reservarPoltrona, verificarDisponibilidade.
Permita que o usuário faça várias reservas até decidir encerrar.
*/

const prompt = require("prompt-sync")();

const teatro = []

for (let i = 0; i < 3; i++) {
    teatro[i] = []; //cria a fileira

    for (let j = 0; j < 10; j++) {
        teatro[i][j] = 'livre';
    }
}


function fMostrarPoltronas() {
    for (let i = 0; i < teatro.length; i++) {
        let statusFileira = "Fileira: " + (i + 1) + ": ";

        for (let j = 0; j < teatro[i].length; j++) {
            statusFileira += teatro[i][j] + " "; // ex: livre  livre  ocupado ...
        }

        console.log(statusFileira);
    }
}

function fVerificarDisponibilidade(fileira, poltrona) {
    return teatro[fileira - 1][poltrona - 1] === 'livre' ? true : false //Se o lugar que o cara escolheu estiver ocupado, retorna false
}

function fReservarPoltrona() {
    let decisao = 's'

    while (decisao === 's') {
        let fileira = parseInt(prompt("Digite a fileira que deseja reservar: (1 - 3): "));
        let poltrona = parseInt(prompt("Digite a poltrona que deseja reservar (1- 10): "))
    
        if (fVerificarDisponibilidade(fileira, poltrona) === true) {
            teatro[fileira - 1][poltrona - 1] = "ocupada";
            console.log(`Poltrona reservada com sucesso: Fileira: ${fileira}, poltrona: ${poltrona}`);
        }
        else {
            console.log("Essa poltrona já esta ocupada. Escolha outra");
        }
    
        decisao = prompt("Deseja reservar outra poltrona? (S/N) ");

        if (decisao === 's'){
            fMostrarPoltronas();
            continue;
        }
        else {
            console.log("Encerrando sistema");
            break;
        }
    }
}

console.log("Bem-Vindo");

fMostrarPoltronas();

let decisao = prompt('Deseja reservar alguma poltrona? S/N ');

if (decisao.toLowerCase() === 's') {
    fReservarPoltrona()
}



