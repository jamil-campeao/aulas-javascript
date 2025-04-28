function fVerificaSeNumeroEhPrimo(pNumero) {
    let primo = false;  //defino como false no inicio

    for(let i = 2; i < pNumero; i++) {
        if(pNumero % i == 0)
            primo = false;
    return primo;
    }
}

function fCalculaTarifa(pConsumoKWH) {
    let tarifa;
    if (pConsumoKWH <= 100)
        tarifa = 0.5;
    else
    if (pConsumoKWH > 100 && pConsumoKWH <= 200)
        tarifa = 0.70;
    else
        tarifa = 0.87;

    return pConsumoKWH * tarifa;
}

function fVerificaSeNumeroEhPerfeito(pNumero) {
    let soma = 0;
    for(let i = 1; i < pNumero; i++) {
        if(pNumero % i == 0)
            soma += i;
    }

    return soma == pNumero ? true: false;
}

function fCalculaTempoDeJogo(pHoraInicial, pMinutoInicial, pHoraFinal, pMinutoFinal) {
    //Converto tudo para minutos
    const inicioEmMinutos = pHoraInicial * 60 + pMinutoInicial;
    const fimEmMinutos = pHoraFinal * 60 + pMinutoFinal;

    let duracao;
    //Calculo a duração
    //primeiro caso: jogo termina no mesmo dia 
    //segundo caso: jogo termina no dia seguinte
    return fimEmMinutos >= inicioEmMinutos ? duracao = fimEmMinutos - inicioEmMinutos: duracao = (24 * 60 - inicioEmMinutos);
}

function fCalculaMediaNotasMaisAltas(p1, p2, p3) {
    //Ordena as notas em ordem decrescente
    const notas = [p1, p2, p3].sort((a, b) => b - a);

    console.log(`Nota mais alta: ${notas[0]}`);
    console.log(`Nota mais baixa: ${notas[2]}`);

    return ((notas[0] + notas[1]) / 2).toFixed(2);
}


module.exports = {
    fVerificaSeNumeroEhPrimo,
    fCalculaTarifa,
    fVerificaSeNumeroEhPerfeito,
    fCalculaTempoDeJogo,
    fCalculaMediaNotasMaisAltas,
}