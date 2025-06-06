const prompt = require("prompt-sync")();
const fs = require("fs");

const nomeArquivo = "livros.json";


let listaLivros = [];
if (fs.existsSync(nomeArquivo)) {
    const dados = fs.readFileSync(nomeArquivo, "utf-8");
    listaLivros = JSON.parse(dados);
}


const livroBase = {
    titulo: "",
    autor: "",
    anoPublicacao: 0,
    emprestado: false,
    aluno: "",

    emprestar(aluno) {
        this.emprestado = true;
        this.aluno = aluno;
    },

    devolver() {
        this.emprestado = false;
        this.aluno = "";
    }
};


function fCriarLivro(titulo, autor, ano) {
    return {
        ...JSON.parse(JSON.stringify(livroBase)),
        titulo,
        autor,
        anoPublicacao: ano,
        emprestado: false,
        aluno: "",
        emprestar: livroBase.emprestar,
        devolver: livroBase.devolver
    };
}


function fSalvarNoArquivo() {
    fs.writeFileSync(nomeArquivo, JSON.stringify(listaLivros, null, 2));
}


function fCadastrarNovoLivro() {
    const titulo = prompt("Título do Livro: ");
    const autor = prompt("Autor do Livro: ");
    const ano = parseInt(prompt("Ano do Livro: "));
    const novoLivro = fCriarLivro(titulo, autor, ano);

    listaLivros.push(novoLivro);
    fSalvarNoArquivo();
    console.log("Livro cadastrado com sucesso!");
}


function fListarLivros() {
    if (listaLivros.length === 0) {
        console.log("Nenhum livro cadastrado.");
        return;
    }

    console.log("\nLista de livros:");
    listaLivros.forEach((livro, index) => {
        console.log(`\n[${index}]`);
        console.log(`Título: ${livro.titulo}`);
        console.log(`Autor: ${livro.autor}`);
        console.log(`Ano: ${livro.anoPublicacao}`);
        console.log(`Status: ${livro.emprestado ? `Emprestado para ${livro.aluno}` : "Disponível"}`);
    });
}

function fEmprestarLivro() {
    fListarLivros();
    const index = Number(prompt("Digite o número do livro que deseja emprestar: "));
    if (index < 0 || index >= listaLivros.length) {
        console.log("Indice inválido.");
        return;
    }

    if (listaLivros[index].emprestado) {
        console.log("Esse livro já está emprestado.");
        return;
    }

    const aluno = prompt("Nome do aluno: ");
    listaLivros[index].emprestar(aluno);
    fSalvarNoArquivo();
    console.log("Livro emprestado com sucesso.");
}


function fDevolverLivro() {
    fListarLivros();
    const index = Number(prompt("Digite o número do livro a devolver: "));
    if (index < 0 || index >= listaLivros.length) {
        console.log("Índice inválido.");
        return;
    }

    if (!listaLivros[index].emprestado) {
        console.log("Esse livro já está disponível.");
        return;
    }

    listaLivros[index].devolver();
    fSalvarNoArquivo();
    console.log("Livro devolvido com sucesso.");
}

// Menu principal
function fMenu() {
    while (true) {
        console.log("\n===== Sistema da Biblioteca =====");
        console.log("1. Cadastrar novo livro");
        console.log("2. Listar livros");
        console.log("3. Emprestar livro");
        console.log("4. Devolver livro");
        console.log("5. Sair");
        const opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                fCadastrarNovoLivro();
                break;
            case "2":
                fListarLivros();
                break;
            case "3":
                fEmprestarLivro();
                break;
            case "4":
                fDevolverLivro();
                break;
            case "5":
                console.log("Saindo do sistema");
                return;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

fMenu();
