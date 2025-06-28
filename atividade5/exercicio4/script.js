document.addEventListener('DOMContentLoaded', () => {
    const reservaForm = document.getElementById('reservaForm');
    const resumoReservaDiv = document.getElementById('resumoReserva');

    reservaForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nomeCompleto = document.getElementById('nomeCompleto').value.trim();
        const email = document.getElementById('email').value.trim();
        const dataViagem = document.getElementById('dataViagem').value;
        const destino = document.getElementById('destino').value;


        const acomodacaoSelecionada = document.querySelector('input[name="acomodacao"]:checked');
        const tipoAcomodacao = acomodacaoSelecionada ? acomodacaoSelecionada.value : 'Nenhum selecionado';


        const adicionaisSelecionados = [];
        const checkboxesAdicionais = document.querySelectorAll('input[name="adicionais"]:checked');
        checkboxesAdicionais.forEach(checkbox => {
            adicionaisSelecionados.push(checkbox.value);
        });
        const adicionaisTexto = adicionaisSelecionados.length > 0 ? adicionaisSelecionados.join(', ') : 'Nenhum adicional';


        if (!nomeCompleto || !email || !dataViagem || !destino) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        if (!acomodacaoSelecionada) {
            alert('Por favor, selecione um tipo de acomodação.');
            return;
        }

        const resumoHTML = `
            <h2>Resumo da Sua Reserva</h2>
            <p><strong>Nome Completo:</strong> ${nomeCompleto}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Data da Viagem:</strong> ${formatarData(dataViagem)}</p>
            <p><strong>Destino:</strong> ${destino}</p>
            <p><strong>Tipo de Acomodação:</strong> ${tipoAcomodacao}</p>
            <p><strong>Adicionais:</strong> ${adicionaisTexto}</p>
            <p class="agradecimento">Agradecemos a sua reserva! Em breve entraremos em contato.</p>
        `;


        resumoReservaDiv.innerHTML = resumoHTML;
        resumoReservaDiv.style.display = 'block'; 

        reservaForm.reset();
    });

    /**
     * Função auxiliar para formatar a data para o padrão brasileiro (dd/mm/aaaa).
     * @param {string} dataString - Data no formato YYYY-MM-DD.
     * @returns {string} Data formatada.
     */
    function formatarData(dataString) {
        const [ano, mes, dia] = dataString.split('-');
        return `${dia}/${mes}/${ano}`;
    }
});