const participante = {
    nome: '',
    idade: 0
}
let ulResultado = document.getElementById("resultado");
let listaParticipantes = [];

document.getElementById("formParticipante").addEventListener("submit", function(event) {
    event.preventDefault(); //desablita o evento de submit padrão do submit

    //Pego os dados do formulário
    participante.nome = document.getElementById("nome").value
    participante.idade = document.getElementById("idade").value

    if (participante.idade > 18) {
        listaParticipantes.push(participante);
        //mostra o participante na pagina
        let novoItem = document.createElement("li");
        novoItem.textContent = "Nome do participante: " + participante.nome + ", idade: " + participante.idade
        ulResultado.appendChild(novoItem);
    }
    else {
        alert("Idade não permitida. Digite uma idade acima de 18 anos");
        return;
    }
})