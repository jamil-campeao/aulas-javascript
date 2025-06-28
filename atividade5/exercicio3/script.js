document.addEventListener('DOMContentLoaded', () => {
    const iniciarQuizBtn = document.getElementById('iniciarQuizBtn');

    const perguntas = [
        {
            pergunta: "Qual é a capital do Brasil?\n(A) Rio de Janeiro\n(B) Brasília\n(C) São Paulo\n(D) Salvador",
            respostaCorreta: "B"
        },
        {
            pergunta: "Quantos planetas fazem parte do nosso Sistema Solar (considerando Plutão um planeta anão)?\n(A) 8\n(B) 9\n(C) 7\n(D) 10",
            respostaCorreta: "A"
        },
        {
            pergunta: "Qual animal é conhecido como 'Rei da Selva'?\n(A) Tigre\n(B) Elefante\n(C) Leão\n(D) Urso",
            respostaCorreta: "C"
        }
    ];


    iniciarQuizBtn.addEventListener('click', () => {
        iniciarQuiz();
    });


    function iniciarQuiz() {
        const respostasUsuario = [];

        // Loop para fazer cada pergunta
        for (let i = 0; i < perguntas.length; i++) {
            let resposta = prompt(`Pergunta ${i + 1}: ${perguntas[i].pergunta}`);
            
            if (resposta !== null) {
                respostasUsuario.push(resposta.trim().toUpperCase());
            } else {
                respostasUsuario.push(""); 
                alert("Quiz cancelado ou resposta não fornecida. As respostas restantes serão consideradas incorretas.");
                break;
            }
        }

        // Chama a função para corrigir o quiz e exibe o resultado
        const acertos = corrigirQuiz(respostasUsuario);
        alert(`Quiz finalizado!\nVocê acertou ${acertos} de ${perguntas.length} perguntas.`);
    }

    /**
     * Função para corrigir as respostas do quiz.
     * @param {Array<string>} respostasUsuario
     * @returns {number} 
     */
    function corrigirQuiz(respostasUsuario) {
        let acertos = 0;
        for (let i = 0; i < perguntas.length; i++) {
            // Compara a resposta do usuário (em maiúscula) com a resposta correta (em maiúscula)
            if (respostasUsuario[i] === perguntas[i].respostaCorreta) {
                acertos++;
            }
        }
        return acertos;
    }
});