// server.js
const express = require("express");
const cors = require("cors");
const db = require("./js/firebase"); // db é do firebase-admin

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Coleção "tarefas"
const tarefasRef = db.collection("tarefas");

// [GET] Listar tarefas
app.get("/tarefas", async (req, res) => {
  const snapshot = await tarefasRef.get();
  const tarefas = [];
  snapshot.forEach((doc) => {
    tarefas.push({ id: doc.id, ...doc.data() });
  });
  res.json(tarefas);
});

// [POST] Criar tarefa
app.post("/tarefas", async (req, res) => {
  const { titulo, descricao } = req.body;
  const docRef = await tarefasRef.add({ titulo, descricao });
  res.json({ id: docRef.id });
});

// [PUT] Atualizar tarefa
app.put("/tarefas/:id", async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao } = req.body;
  await tarefasRef.doc(id).update({ titulo, descricao });
  res.sendStatus(200);
});

// [DELETE] Excluir tarefa
app.delete("/tarefas/:id", async (req, res) => {
  const { id } = req.params;
  await tarefasRef.doc(id).delete();
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});