document.addEventListener('DOMContentLoaded', () => {
    const simuladorForm = document.getElementById('simuladorForm');
    const valorInicialInput = document.getElementById('valorInicial');
    const taxaRendimentoInput = document.getElementById('taxaRendimento');
    const quantidadeMesesInput = document.getElementById('quantidadeMeses');
    const resultadoDiv = document.getElementById('resultado');

    simuladorForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o recarregamento da página ao submeter o formulário

        const valorInicial = parseFloat(valorInicialInput.value);
        const taxaRendimento = parseFloat(taxaRendimentoInput.value);
        const quantidadeMeses = parseInt(quantidadeMesesInput.value);

        // Validação básica dos inputs
        if (isNaN(valorInicial) || valorInicial < 0) {
            alert('Por favor, insira um valor inicial válido.');
            return;
        }
        if (isNaN(taxaRendimento) || taxaRendimento < 0) {
            alert('Por favor, insira uma taxa de rendimento válida.');
            return;
        }
        if (isNaN(quantidadeMeses) || quantidadeMeses < 1) {
            alert('Por favor, insira uma quantidade de meses válida (mínimo 1).');
            return;
        }

        // Chama a função para calcular e exibir o rendimento
        calcularRendimento(valorInicial, taxaRendimento, quantidadeMeses);
    });

    /**
     * Função que calcula e exibe o rendimento de uma aplicação bancária (juros compostos).
     * @param {number} valorInicial - O valor inicial da aplicação.
     * @param {number} taxaMensal - A taxa de rendimento mensal em porcentagem (ex: 1.5 para 1.5%).
     * @param {number} meses - A quantidade de meses da aplicação.
     */
    function calcularRendimento(valorInicial, taxaMensal, meses) {
        let valorAtual = valorInicial;
        const taxaDecimal = taxaMensal / 100; // Converte a taxa de % para decimal

        let htmlOutput = `<h2>Resultado do Rendimento</h2>`;
        htmlOutput += `<p><strong>Valor aplicado:</strong> R$ ${valorInicial.toFixed(2).replace('.', ',')}</p>`;
        htmlOutput += `<ul>`;

        for (let i = 1; i <= meses; i++) {
            const rendimentoDoMes = valorAtual * taxaDecimal;
            const novoValorTotal = valorAtual + rendimentoDoMes;

            htmlOutput += `<li>`;
            htmlOutput += `<strong>Mês ${i}:</strong> `;
            htmlOutput += `Valor Total: R$ ${novoValorTotal.toFixed(2).replace('.', ',')} `;
            htmlOutput += `Rendimento: R$ ${rendimentoDoMes.toFixed(2).replace('.', ',')}`;
            htmlOutput += `</li>`;

            valorAtual = novoValorTotal; // Atualiza o valor para o próximo mês (juros compostos)
        }

        htmlOutput += `</ul>`;
        resultadoDiv.innerHTML = htmlOutput; // Insere o HTML gerado na div de resultado
    }
});