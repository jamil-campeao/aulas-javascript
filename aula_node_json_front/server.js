const express = require("express");
const cors = require('cors');
const db = require('./firebase');

const app = express();
const PORT = 3000;

app.use(cors({
    origin: '*'
}));

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
    console.log(`CTRL + C para parar o serviço`);
});


app.get('/', (req, res) => {
    return res.status(200).send('<h1>  Bem vindo a API! </h1>');
});

app.post('/cadastrar', (req, res) => {
    const aluno = req.body
    try {
        if (aluno) {
            const gravar = db.collection('alunos').add(aluno)
            return res.status(201).json({message: 'Tudo certo'})
        }
        else {
            return res.status(500).json({message: 'Tudo errado'})
        }
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Tudo errado'})  
    }

})