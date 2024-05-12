const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/buscar', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
    })

    connection.query("SELCT * FROM usuario", (err, results, fields) => {
        if (err) {
            console.error('erro ao buscar usuario', err);
            res.status(500).json({ error: 'erro ao buscar usuario' })
            return;
        }
        res.json(results)
    })
})

app.listen(5002, console.log('rodando uma belezinha na porta 5002'));