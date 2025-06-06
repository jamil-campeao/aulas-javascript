/* Sistema de Reservas de Poltronas de um Teatro

Um teatro quer informatizar a reserva de poltronas para sessões. Ele tem 3 fileiras de poltronas com 10 poltronas em cada fileira. O sistema deve:

Mostrar as poltronas disponíveis;
Permitir reservar uma poltrona pelo número (fileira e poltrona);
Impedir a reserva de uma poltrona já ocupada;
Exibir o estado atual das poltronas (ocupada ou livre).
Requisitos:

Use um array com valores booleanos (true ou false) ou strings ("livre", "ocupada") para indicar a ocupação das poltronas.
Crie funções para: mostrarPoltronas, reservarPoltrona, verificarDisponibilidade.
Permita que o usuário faça várias reservas até decidir encerrar */

const prompt = require("prompt-sync")();

const teatro = [];

for (let i = 0; i < 3; i++) {
    teatro[i] = [];

    for (let j = 0; j < 10; j++) {
        teatro[i][j] = "livre";
    }
};

function fMostrarPoltronas() {
    console.log("Estado atual das poltronas: ");

    for( let i = 0; i < teatro.length; i++) {
        let linha = `Fileira ${i + 1}: `

        for(let j = 0; j < teatro[i].length; j++) {
            linha += [` ${teatro[i][j]} `]
        }
        console.log(linha);
    }
}

function fVerificaDisponibilidade(fileira, poltrona) {
    return teatro[fileira][poltrona];
}

function fReservarPoltrona(fileira, poltrona) {
    if (fVerificaDisponibilidade) {
        teatro[fileira][poltrona] = "ocupada";
        console.log(`Poltrona reservada com sucesso. Fileira: ${fileira}, Poltrona: ${poltrona}`);
    }
    else {
        console.log(`Poltrona já reservada`);
    }
}

while (true) {
    fMostrarPoltronas();

    const pergunta = prompt("Deseja reserva alguma poltrona? S/N ").toLocaleUpperCase();

    if (pergunta !== "S") {
        console.log(`Encerrando o sistema`);
        break;
    }

    const fileira = parseInt(prompt("Informa a fileira: (1 a 3): ")) - 1;
    const poltrona = parseInt(prompt("Informa a poltrona: (1 a 10): ")) - 1;

    if (fileira < 0 || fileira > 3 || poltrona < 0 || poltrona > 10) {
        console.log(`Fileira ou poltrona inexistentes. Tente novamente`);
        continue;
    }

    fReservarPoltrona(fileira, poltrona);


}

