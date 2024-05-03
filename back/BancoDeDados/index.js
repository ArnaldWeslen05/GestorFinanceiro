const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
require('dotenv').config()

const app = express()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'1234',
    database: 'logs'
})
connection.connect(err => {
    if(err) {console.log('erro ao se conectar ao banco');
    return;
}
    console.log('conectado ao banco com sucesso');
})

app.use(express.json())
app.use(cors())

//criando rota 
app.post('/dados', (req, res)=>{
    const {pergunta, resposta} = req.body;                       
    const INSERT_QUERY = `INSERT INTO log_table (pergunta, resposta) VALUES (?, ?)`;
    connection.query(INSERT_QUERY, [pergunta, resposta], (err, result) => {
        if(err){
            console.log('Erro ao inserir dados:', err);
          res.status(500).send('Error ao inserir dados:',)
        return;
     }
     console.log('Dados Inseridos com sucesso!');
     res.status(500).send('Dados inseridos com sucesso')
    })
})


app.listen(5000, () => {
  console.log('Executando na porta 5000');
})