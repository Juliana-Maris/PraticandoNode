const path = require('path')
const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
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