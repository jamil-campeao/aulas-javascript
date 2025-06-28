document.addEventListener('DOMContentLoaded', () => {
    const cadastroForm = document.getElementById('cadastroForm');
    const cepInput = document.getElementById('cep');
    const ruaInput = document.getElementById('rua');
    const bairroInput = document.getElementById('bairro');
    const cidadeInput = document.getElementById('cidade');
    const estadoInput = document.getElementById('estado');
    const telefoneInput = document.getElementById('telefone');

    // Função para formatar o CEP (XXXXX-XXX)
    cepInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
        if (value.length > 5) {
            value = value.substring(0, 5) + '-' + value.substring(5, 8);
        }
        e.target.value = value;
    });

    // Função para formatar o telefone ((XX) XXXXX-XXXX)
    telefoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
        if (value.length > 10) { // Para celular (11 dígitos)
            value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`;
        } else if (value.length > 6) { // Para telefone fixo ou enquanto digita
            value = `(${value.substring(0, 2)}) ${value.substring(2, 6)}-${value.substring(6, 10)}`;
        } else if (value.length > 2) {
            value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
        } else if (value.length > 0) {
            value = `(${value}`;
        }
        e.target.value = value;
    });

    // Buscar CEP na API ViaCEP
    cepInput.addEventListener('blur', async () => {
        const cep = cepInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (cep.length === 8) {
            try {
                const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                const data = await response.json();

                if (data.erro) {
                    alert('CEP não encontrado.');
                    ruaInput.value = '';
                    bairroInput.value = '';
                    cidadeInput.value = '';
                    estadoInput.value = '';
                    // Permite digitar se não encontrar
                    ruaInput.readOnly = false;
                    bairroInput.readOnly = false;
                } else {
                    ruaInput.value = data.logradouro || '';
                    bairroInput.value = data.bairro || '';
                    cidadeInput.value = data.localidade || '';
                    estadoInput.value = data.uf || '';
                    // Bloqueia se encontrar
                    ruaInput.readOnly = data.logradouro ? true : false;
                    bairroInput.readOnly = data.bairro ? true : false;
                }
            } catch (error) {
                console.error('Erro ao buscar CEP:', error);
                alert('Erro ao buscar CEP. Por favor, tente novamente.');
                // Permite digitar em caso de erro na API
                ruaInput.readOnly = false;
                bairroInput.readOnly = false;
            }
        } else if (cep.length > 0) {
            alert('CEP inválido. Digite 8 dígitos.');
        }
    });

    // Validação e Cadastro
    cadastroForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio padrão do formulário

        const nomeCompleto = document.getElementById('nomeCompleto').value.trim();
        const dataNascimento = document.getElementById('dataNascimento').value;
        const genero = document.getElementById('genero').value;
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value;
        const confirmarSenha = document.getElementById('confirmarSenha').value;
        const telefone = document.getElementById('telefone').value.trim();
        const cep = cepInput.value.trim();
        const rua = ruaInput.value.trim();
        const numeroResidencia = document.getElementById('numeroResidencia').value.trim();
        const bairro = bairroInput.value.trim();
        const cidade = cidadeInput.value.trim();
        const estado = estadoInput.value.trim();

        // Validações básicas
        if (!nomeCompleto || !dataNascimento || !genero || !email || !senha || !confirmarSenha || !telefone || !cep || !rua || !numeroResidencia || !bairro || !cidade || !estado) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Validação de formato de e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        // Validação de formato de telefone (básica, o pattern no HTML já ajuda)
        const phoneRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/; // (XX) XXXXX-XXXX
        if (!phoneRegex.test(telefone)) {
            alert('Por favor, insira um número de telefone válido no formato (XX) XXXXX-XXXX.');
            return;
        }

        // Validação de senha
        if (senha.length < 6) {
            alert('A senha deve ter no mínimo 6 caracteres.');
            return;
        }
        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem!');
            return;
        }

        // Verificar se o e-mail já está cadastrado
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.email === email);

        if (userExists) {
            alert('Este e-mail já está cadastrado. Por favor, use outro e-mail ou faça login.');
            return;
        }

        // Criar objeto de usuário
        const newUser = {
            nomeCompleto,
            dataNascimento,
            genero,
            email,
            senha, // Em um sistema real, a senha seria hashada
            telefone,
            cep,
            rua,
            numeroResidencia,
            bairro,
            cidade,
            estado
        };

        // Salvar usuário no localStorage
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alert('Cadastro realizado com sucesso! Você será redirecionado para a página de login.');
        window.location.href = 'login.html'; // Redireciona para a página de login
    });
});