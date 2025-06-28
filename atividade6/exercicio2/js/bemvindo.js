document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const userEmail = document.getElementById('userEmail');
    const userAddress = document.getElementById('userAddress');
    const userPhone = document.getElementById('userPhone');
    const logoutBtn = document.getElementById('logoutBtn');

    // Verificar se há usuário logado no sessionStorage
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

    if (!loggedInUser) {
        // Se não houver usuário logado, redirecionar para a página de login
        alert('Você precisa estar logado para acessar esta página.');
        window.location.href = 'login.html';
        return; // Interrompe a execução do script
    }

    // Exibir informações do usuário logado
    welcomeMessage.textContent = `Olá, ${loggedInUser.nomeCompleto}!`;
    userEmail.textContent = loggedInUser.email;
    userAddress.textContent = loggedInUser.endereco;
    userPhone.textContent = loggedInUser.telefone;

    // Botão "Sair"
    logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem('loggedInUser'); // Limpa a sessão
        alert('Você foi desconectado.');
        window.location.href = 'login.html'; // Redireciona para a página de login
    });
});