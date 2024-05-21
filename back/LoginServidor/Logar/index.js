const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'login'
    });
    connection.query("SELECT * FROM usuarios WHERE email = ? AND senha = ?", [email, senha], (err, results, fields) => {
        if (err) {
            console.error('Erro ao buscar usuário:', err);
            res.status(500).json({ error: 'Erro ao buscar usuário.' });
            return;
           
        } 
        if (results.length > 0) {
            res.json({ authenticated: true });
            console.log('Login com sucesso')
        } else {
            res.json({ authenticated: false });
            console.log('usuario não encontrado');
        }
    });
});
app.listen(5002, () => {
    console.log('Servidor rodando na porta 5002.');
});
