const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(express.json());
app.use(cors());

let authenticatedUser = null; // Armazenar informações do usuário autenticado

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'login'
});
connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        process.exit(1); // Encerrar o processo se não conseguir conectar ao banco de dados
    } else {
        console.log('Conectado ao banco de dados');
    }
});

//LOGIN

app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    connection.query("SELECT * FROM usuarios WHERE email = ? AND senha = ?", [email, senha], (err, results) => {
        if (err) {
            console.error('Erro ao buscar usuário:', err);
            res.status(500).json({ error: 'Erro ao buscar usuário.' });
            return;
        }
        if (results.length > 0) {
            authenticatedUser = results[0]; // Armazenar informações do usuário autenticado
            res.json({ authenticated: true });
            console.log('Login com sucesso');
        } else {
            res.json({ authenticated: false });
            console.log('Usuário não encontrado');
        }
    });
});

//CADASTRO 

app.post("/cadastro", (req, res) => {
    const { nome, email, senha } = req.body;
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1234",
        database: "login",
    });

    // apra verifica se o email já está cadastrado
    connection.query(
        "SELECT * FROM usuarios WHERE email = ?",
        [email],
        (err, result) => {
            if (err) {
                console.log("Erro ao consultar usuário:", err);
                res.status(500).json({ error: "Erro ao cadastrar usuário" });
                return;
            }
            // Se o email já estiver cadastrado, retorna um erro
            if (result.length > 0) {
                console.log("Email já cadastrado");
                res.status(400).json({ error: "Este email já está cadastrado, tente outro!" });
                return;
            }
            // Se o email não estiver cadastrado, realiza a inserção no banco de dados
            const query =
                "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
            connection.query(query, [nome, email, senha], (err, result) => {
                if (err) {
                    console.log("Erro ao cadastrar usuário:", err);
                    res.status(500).json({ error: "Erro ao cadastrar usuário" });
                    return;
                }
                console.log("Usuário cadastrado com sucesso!");
                res.status(200).send("Usuário cadastrado com sucesso!");
            });
        }
    );
});

//ATUALIZAR FINANCIAS


app.post('/financias', (req, res) => {
    const { entrada, saida } = req.body;
    if (!authenticatedUser) {
        return res.status(401).json({ error: 'Usuário não autenticado.' });
    }
    const saldo = entrada - saida;

    console.log('Atualizando saldo:', saldo, 'para o usuário:', authenticatedUser.email);

    connection.query("UPDATE usuarios SET saldo = ? WHERE email = ?", [saldo, authenticatedUser.email], (err, results) => {
        if (err) {
            console.error('Erro ao atualizar o saldo:', err);
            res.status(500).json({ error: 'Erro ao atualizar o saldo.' });
            console.log(err)
            return;
        }
        res.json({ success: true });
    });
});

app.listen(5002, () => {
    console.log('Servidor rodando na porta 5002.');
});
