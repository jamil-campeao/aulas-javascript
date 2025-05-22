/*
Sistema de Controle de Biblioteca

Você foi contratado por uma biblioteca escolar que deseja iniciar a digitalização de seus registros. Você deve desenvolver um sistema simples baseado em objetos JavaScript que represente o cadastro de livros e o controle de empréstimos.

Requisitos

Crie um objeto livro com as seguintes propriedades:
- titulo

- autor

- anoPublicacao

- emprestado (booleano)

- aluno (nome do aluno que pegou o livro, se emprestado)

Implemente dois métodos:

- emprestar(nomeAluno) → altera o status para emprestado e registra o nome do aluno.

- devolver() → altera o status para disponível (emprestado = false) e limpa o nome do aluno.

Possibilite que o usuário possa:

- Cadastrar um novo livro (salvando os dados no formato JSON e em arquivo)

- Listar todos os livros com todas as informações.

- Realizar empréstimo de livros

- Realizar devoluções de livros
*/

const prompt = require("prompt-sync")();
const fs = require("fs");

let listaLivro = [];

function fCriarLivro(titulo, autor, anoPublicacao) {
    return {
        titulo: titulo,
        autor: autor,
        anoPublicacao: anoPublicacao,
        emprestado: false,
        aluno: "",

        emprestar: function(nomeAluno) {
            if (this.emprestado) {
                console.log(`O livro ${this.titulo} já esta emprestado para ${this.aluno}`);
                return false;
            }

            this.emprestado = true;
            this.aluno = nomeAluno;
            console.log(`Livro ${this.titulo} foi emprestado para ${nomeAluno}`);
            return true;
        },

        devolver: function() {
            if (!this.emprestado) {
                console.log(`Livro ${this.titulo} não foi emprestado`);
                return false;
            }

            this.emprestado = false;
            this.aluno = "";

            console.log(`Livro ${this.titulo} foi devolvido com sucesso`);
            return true;
        }
    }
}

function fCadastrarLivro() {
    const titulo = prompt("Informe o tituço do livro: ");
    const autor = prompt("Informe o autor do livro: ");
    const anoPublicacao = parseInt(prompt("Informe o ano de publicação do livro: "));

    const livro = fCriarLivro(titulo, autor, anoPublicacao);
    listaLivro.push(livro);

    console.log("Livro cadastrado com sucesso");
}

function fListarLivros() {
    if (listaLivro.length === 0) {
        console.log("Nenhum livro cadastrado");
        return;
    }

    for (let i = 0; i < listaLivro.length; i++) {
        let l = listaLivro[i];
        console.log(`\nLivro ${i+1} `);
        console.log(`\Título: ${l.titulo} `);
        console.log(`\Autor: ${l.autor} `);
        console.log(`\Ano: ${l.anoPublicacao} `);
        console.log(`\Emprestado: ${l.emprestado ? "Sim": "Não"} `);

        if (l.emprestado) {
            console.log(`Aluno: ${l.aluno}`);
        }
    }
}

function fEmprestarLivro() {
    fListarLivros();

    const n = parseInt(prompt("Informe o número do livro para emprestar: ") - 1);

    if (n < 0 || n >= listaLivro.length) {
        console.log("Número inválido");
        return;
    }

    if (listaLivro[n].emprestado) {
        console.log("Livro já emprestado");
        return;
    }

    const nomeAluno = prompt("Informe o nome do aluno que vai pegar o livro: ");
    listaLivro[n].emprestar(nomeAluno);
}

function fDevolverLivro() {
    fListarLivros();

    const n = parseInt(prompt("Informe o número do livro para devolver: ") - 1);

    if (n < 0 || n >= listaLivro.length) {
        console.log("Número inválido");
        return;
    }

    if (!listaLivro[n].emprestado) {
        console.log("Livro não esta emprestado");
        return;
    }

    listaLivro[n].devolver();
}

function fMenu() {
    while (true) {
        console.log("\nBiblioteca");
        console.log("1 - Cadastrar Livro");
        console.log("2 - Listar Livros");
        console.log("3 - Emprestar Livro");
        console.log("4 - Devolver Livro");
        console.log("0 - Sair");


        let op = parseInt(prompt("Escolha uma opção: "));

        if (op === 1) fCadastrarLivro();
        else if (op === 2) fListarLivros();
        else if (op === 3) fEmprestarLivro();
        else if (op === 4) fDevolverLivro();
        else if (op === 0) break;
        else console.log("Opção inválida");
    }
    
    console.log("Sistema encerado");
}

fMenu();
