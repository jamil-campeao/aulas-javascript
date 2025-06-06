const prompt = require("prompt-sync")();
const fs = require("fs");
const { exit, abort } = require("process");

const produto = {
    nome: "",
    valor: 0,
    quantidadeEstoque: 0
}

let listaProdutos = [];

try {
    let dados = fs.readFileSync("produtos.json", "utf-8");
    listaProdutos = JSON.parse(dados);

    console.log(listaProdutos);

} catch (error) {
    console.error("Erro: " + error);
} 

    produto.nome = prompt("Digite o nome do produto: ");
    produto.valor = Number(prompt(`Digite o preço do ${produto.nome}: `));
    produto.quantidadeEstoque = Number(prompt(`Digite a quantidade de estoque do produto ${produto.nome}: `));
    
    listaProdutos.push(produto);
    
    try {
        fs.writeFileSync("produtos.json", JSON.stringify(produto), "utf-8");
    } catch (error) {
        console.error("Erro: " + error);
    }
