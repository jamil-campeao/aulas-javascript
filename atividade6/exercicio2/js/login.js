document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('emailLogin').value.trim();
        const senha = document.getElementById('senhaLogin').value;

        // Obter usuários do localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Encontrar o usuário pelo e-mail
        const user = users.find(u => u.email === email);

        if (!user) {
            errorMessage.textContent = 'Usuário não encontrado. Verifique seu e-mail.';
            return;
        }

        // Verificar a senha
        if (user.senha === senha) { // Em um sistema real, você compararia hashes
            // Login bem-sucedido: salvar dados do usuário no sessionStorage
            sessionStorage.setItem('loggedInUser', JSON.stringify({
                nomeCompleto: user.nomeCompleto,
                email: user.email,
                endereco: `${user.rua}, ${user.numeroResidencia}, ${user.bairro}, ${user.cidade} - ${user.estado}, CEP: ${user.cep}`,
                telefone: user.telefone
            }));

            alert('Login bem-sucedido! Redirecionando para a área protegida.');
            window.location.href = 'bemvindo.html';
        } else {
            errorMessage.textContent = 'Senha incorreta. Por favor, tente novamente.';
        }
    });
});