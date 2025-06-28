let form = document.getElementById('formCadastro');
const db = require('../../firebase');

form.addEventListener('submit', function(event) {
    event.preventDefault(); //desativa o submit padrao do form

    //cria o objeto para representar o aluno
    let aluno = {
        nome: form.nome.value,
        email: form.email.value,
    }

    gravaDados(aluno)

    form.nome.value = "",
    form.email.value = ""

});

async function gravaDados(data) {
    try {
        const response = await fetch('http://localhost:3000/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    
        data = await response.json();
    
        if (response.status === 201) {
            alert(data.message)
        }
        else {
            throw new data.message
        }
        
    } catch (error) {
        alert(error)
        console.error(error)
    }
} 

async function listaAlunos() {

}