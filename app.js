const path = require('path')
const express = require('express');
const handlebars = require('handlebars');
const { dirname } = require('node:path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.use(express.static('Publicoboot'));
app.get('/', (req, res) => {
    res.render('index');
})

//rota para home
app.get('/', (req, res) => {
    res. send('Bem vindo a página inicial');
});
// rota pagina sobre
app.get('/sobre', (req, res) => {
    res.send('Página: sobre');
});
app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000');
});