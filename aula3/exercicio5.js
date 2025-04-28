/* 
5. Simulador de Caixa Eletrônico: Imagine que você foi contratado por um banco digital para
 desenvolver o protótipo de um simulador de caixa eletrônico. Esse sistema será usado para testar o
 comportamento de saque pelos usuários e deve considerar várias regras.
 Funcionalidades:
 • Solicitar ao usuário o valor que deseja sacar.
 • Verificar se o valor é válido (múltiplo de 10 e dentro do saldo disponível).
 • Calcular a menor quantidade possível de notas para compor o saque.
 • Mostrar a quantidade de notas de cada valor.
 • Perguntar se o usuário deseja fazer outro saque.
 Requisitos:
 1. O saldo inicial da conta é de R$ 1.000,00.
 2. Os valores disponíveis para saque devem ser múltiplos de 10.
 3. O caixa deve trabalhar com as seguintes notas: 100, 50, 20, 10.
 4. O programa deve informar claramente:
 • Valor solicitado
 • Quantidade de notas de cada tipo
• Novo saldo
 5.O sistema deve continuar funcionando até que o usuário diga que não quer mais sacar ou o 
saldo acabe.
 Dicas:
 • Use uma função sacar(valor) para organizar o processo de saque.
 • Utilize do/while para permitir vários saques.
 • Verifique condições inválidas como:
 • Valor maior que o saldo
 • Valor não múltiplo de 10
 • Valor zero ou negativo
 Exemplo de saída esperada:
 Saldo atual: R$1000
 Digite o valor que deseja sacar: 230
 Notas entregues:
 2 nota(s) de R$100
 1 nota(s) de R$20
 1 nota(s) de R$10
 Saldo restante: R$770
 Deseja fazer outro saque? (s/n): 
 */


class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }

    getSaldo() {
        return this.saldo;
    }

    setSaldo(pValor) {
        this.saldo -= pValor;
    }

    fVerificaSeMultiplo10(pValor) {
        if (pValor % 10 !== 0) {
            console.log("Valor digitado não é multiplo de 10");
            return false;
        }
        else {
            return true;
        }
    }

    fProcessaNotas(pValor) {
        let pValoraux = pValor;
        let notas100 = 0;
        let notas50 = 0;
        let notas20 = 0;
        let notas10 = 0;

        //Primeira parte: notas de 100
        while(pValoraux >= 100) {
            notas100++;
            pValoraux -= 100;
        }

        //Segunda Parte: notas de 50
        while(pValoraux >= 50) {
            notas50++;
            pValoraux -= 50;
        }

        //Terceira Parte: notas de 20
        while(pValoraux >= 20) {
            notas20++;
            pValoraux -= 20;
        }

        //Quarta Parte: notas de 10
        while(pValoraux >= 10) {
            notas10++;
            pValoraux -= 10;
        }

        //Quinta Parte: Validação e retorno das quantidades das notas utilizadas
        if(pValoraux === 0) {
        return     `\t\tNotas de 100: ${notas100} \n\t\tNotas de 50: ${notas50} \n\t\tNotas de 20: ${notas20} \n\t\tNotas de 10: ${notas10}`
                    
        }
        else {
            return `Ocorreu um problema no processamento, valor do pValorAux: ${pValoraux}`
        }

    }

    fSaldoInsuficiente(pValor) {
        if(this.getSaldo() < pValor) {
            console.log("Saldo insuficiente para saque");
            return true;
        }
        else {
            return false;
        }
    }


}

const prompt = require("prompt-sync")();

const conta = new Conta(1000);
let valorASacar = 0;
let decisao;


do {
    valorASacar = 0;
    console.log(`Saldo restante R$: ${conta.getSaldo()}`);

    if (conta.getSaldo() === 0) {
        console.log("Saldo zerado, não é possível fazer mais saques");
        decisao = 0;
    }
    else {
        decisao = Number(prompt("Deseja realizar um saque? (1 - Sim, 0 - Não) "));

        if (decisao === 1) {
            fRealizaSaque();
        }
    }


    if (decisao === 1) {

        decisaoOutroSaque = Number(prompt("Deseja realizar outro saque? (1 - Sim, 0 - Não) "));

        if (decisaoOutroSaque === 1) {
            fRealizaSaque();
        }
    }

} while (decisao === 1);

function fRealizaSaque() {
    do {
        valorASacar = Number(prompt("Informe o valor que deseja sacar: "));

    } while (conta.fVerificaSeMultiplo10(valorASacar) === false);

    if (conta.fSaldoInsuficiente(valorASacar) === false) {
        console.log(conta.fProcessaNotas(valorASacar));
        conta.setSaldo(valorASacar);
    }
}
 