document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = document.getElementById("user").value;
  const senha = document.getElementById("pass").value;
  const mensagemErro = document.getElementById("mensagemErro");

  if (usuario === "admin" && senha === "1234") {
    sessionStorage.setItem("logado", "true");

    window.location.href = "dashboard.html";
  } else {
    mensagemErro.textContent = "Usuário ou senha inválidos!";
  }
});
