if (sessionStorage.getItem("logado") !== "true") {
  window.location.href = "index.html";
}

const form = document.getElementById("formTarefa");
const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const tarefaId = document.getElementById("tarefaId");
const lista = document.getElementById("listaTarefas");
const logoutBtn = document.getElementById("logoutBtn");

// Listar tarefas ao carregar
window.addEventListener("DOMContentLoaded", listarTarefas);

// Logout
logoutBtn.addEventListener("click", () => {
  sessionStorage.clear();
  window.location.href = "index.html";
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const dados = {
    titulo: titulo.value,
    descricao: descricao.value,
  };

  try {
    if (tarefaId.value) {
      // Atualizar
      await fetch(`http://localhost:3000/tarefas/${tarefaId.value}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
    } else {
      // Criar nova
      await fetch("http://localhost:3000/tarefas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
    }

    form.reset();
    tarefaId.value = "";
    listarTarefas();
  } catch (err) {
    alert("Erro ao salvar tarefa!");
    console.error(err);
  }
});

// Função para listar todas as tarefas
async function listarTarefas() {
  lista.innerHTML = "";

  try {
    const resp = await fetch("http://localhost:3000/tarefas");
    const tarefas = await resp.json();

    tarefas.forEach((tarefa) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${tarefa.titulo}</strong> - ${tarefa.descricao}
        <button onclick="editarTarefa('${tarefa.id}', '${tarefa.titulo}', '${tarefa.descricao}')">Editar</button>
        <button onclick="excluirTarefa('${tarefa.id}')">Excluir</button>
      `;
      lista.appendChild(li);
    });
  } catch (err) {
    alert("Erro ao carregar tarefas.");
    console.error(err);
  }
}

// Função global para preencher o formulário com dados da tarefa (edição)
window.editarTarefa = function (id, tituloTexto, descricaoTexto) {
  tarefaId.value = id;
  titulo.value = tituloTexto;
  descricao.value = descricaoTexto;
};

// Função global para excluir tarefa
window.excluirTarefa = async function (id) {
  if (confirm("Deseja realmente excluir esta tarefa?")) {
    try {
      await fetch(`http://localhost:3000/tarefas/${id}`, {
        method: "DELETE",
      });
      listarTarefas();
    } catch (err) {
      alert("Erro ao excluir tarefa.");
      console.error(err);
    }
  }
};
