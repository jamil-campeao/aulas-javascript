let resultado = document.getElementById("resultado");
let viagem = {
    nome: "",
    email: "",
    dataViagem: "",
    destino: "",
    tipoAcomodacao: "",
    adicionais: []
}
let adicionais = [];

document.getElementById("formViagem").addEventListener("submit", function(event) {
    event.preventDefault(); //desabilita o evento de submit padrão do submit

    //Pego os dados do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const dataViagem = document.getElementById("dataViagem").value;
    const destino = document.getElementById("destino").value;

    //radio button
    const tipoAcomodacao = document.querySelector("input[name='acomodacao']:checked").value;

    //checkbox
    const adicionaisViagem = document.getElementsByName("adicionais");

    while (adicionais.length > 0) { //Deleto o array para criar novamente ele
        adicionais.pop();
    }

    adicionaisViagem.forEach((item => {
        if (item.checked) {
            adicionais.push(item.value)
        }
    }))

    const reserva = {
        nome,
        email,
        dataViagem,
        destino,
        tipoAcomodacao,
        adicionais
    };

    //salvo no localstorage do html
    localStorage.setItem("reservasViagem", JSON.stringify(reserva));

    resultado.innerHTML = ` <p>Nome: ${nome}</p>
                            <p>E-mail: ${email} </p>
                            <p>Data Viagem: ${dataViagem} </p>
                            <p>Destino: ${destino}</p>
                            <p>Tipo acomodação: ${tipoAcomodacao} </p>
                            <p> Adicionais Viagem:  ${adicionais.join(" - ")}</p>`
});

//busco os dados da ultima viagem no localStorage
const listaReservas = JSON.parse(localStorage.getItem("reservasViagem"));

//ao carregar a página, traz a ultima viagem que foi enviada
if (listaReservas) {
    resultado.innerHTML = ` <p>Nome: ${listaReservas.nome}</p>
                            <p>E-mail: ${listaReservas.email} </p>
                            <p>Data Viagem: ${listaReservas.dataViagem} </p>
                            <p>Destino: ${listaReservas.destino}</p>
                            <p>Tipo acomodação: ${listaReservas.tipoAcomodacao} </p>
                            <p> Adicionais Viagem:  ${listaReservas.adicionais.join(" - ")}</p>`;
}
