document.addEventListener('DOMContentLoaded', () => {
    const cadastroParticipanteForm = document.getElementById('cadastroParticipanteForm');
    const nomeParticipanteInput = document.getElementById('nomeParticipante');
    const idadeParticipanteInput = document.getElementById('idadeParticipante');
    const participantesUl = document.getElementById('participantesUl');


    const participantes = [];

    function atualizarListaParticipantes() {
        participantesUl.innerHTML = '';

        if (participantes.length === 0) {
            participantesUl.innerHTML = '<li>Nenhum participante cadastrado ainda.</li>';
            return;
        }

        participantes.forEach(participante => {
            const li = document.createElement('li');
            li.textContent = `Nome: ${participante.nome}, Idade: ${participante.idade}`;
            participantesUl.appendChild(li);
        });
    }

    cadastroParticipanteForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o recarregamento da página

        const nome = nomeParticipanteInput.value.trim();
        const idade = parseInt(idadeParticipanteInput.value);

        if (nome === '') {
            alert('Por favor, digite o nome do participante.');
            return;
        }

        if (isNaN(idade) || idade <= 0) {
            alert('Por favor, digite uma idade válida.');
            return;
        }
        if (idade < 18) {
            alert('Apenas participantes maiores de 18 anos podem ser cadastrados.');
            return;
        }

        const novoParticipante = {
            nome: nome,
            idade: idade
        };

        // Adicionar o participante ao array
        participantes.push(novoParticipante);

        nomeParticipanteInput.value = '';
        idadeParticipanteInput.value = '';

        atualizarListaParticipantes();

        alert(`Participante ${nome} cadastrado com sucesso!`);
    });

    atualizarListaParticipantes();
});