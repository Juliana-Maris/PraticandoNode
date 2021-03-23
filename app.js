const express = require('express');
const app = express();

//rota para home
app.get('/', (req, res) => {
    res. send('Bem vindo a página inicial');
});
// rota pagina sobre
app.get('/about', (req, res) => {
    res.send('Página: sobre');
});
app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000');
});