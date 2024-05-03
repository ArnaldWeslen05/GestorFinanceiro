const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
require('dotenv').config()

const app = express()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'1234',
    database: 'crud'
})

connection.connect(err => {
    if(err) {console.log('erro ao se conectar ao banco');
    return;
}
    console.log('conectado com sucesso');
})


app.listen(5000, () => {
  console.log('Executando na porta 5000');
})