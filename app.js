const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static('public'));

// rotas
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/sobre', (req, res) => {
    res.send('Esta é a página Sobre')
});

app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000');
});