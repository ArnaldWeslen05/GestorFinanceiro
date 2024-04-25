const express = require('express');
const app = express(); 
const PORT = 3000;

app.get('/hello-world', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Servidor em execução na porta ${PORT}`);
});
