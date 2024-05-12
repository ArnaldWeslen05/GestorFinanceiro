const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

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

app.listen(5001, () => console.log("Servidor rodando na porta 5001"));
