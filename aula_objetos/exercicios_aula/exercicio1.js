const prompt = require("prompt-sync")();

const filmes = {
    titulo: "",
    diretor: "",
    ano: 0,

    fExibirInfo: function() {
        return `Título: ${this.titulo}, Diretor: ${this.diretor}, Ano: ${this.ano}`;
    }
}


filmes.titulo = prompt("Informe o nome do filme: ");
filmes.diretor = prompt(`Informe o diretor do filme ${filmes.titulo}: `);
filmes.ano = prompt(`Informe o ano do filme ${filmes.titulo}: `);


console.log(filmes.fExibirInfo());