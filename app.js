const path = require('path');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser')
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static('public'));
app.get('/', (req,res) => {
    res.render('index', {
        name: "Ju Martinez"
    });
});

// rotas
app.get('/post', (req, res) => {
    res.render('form');
});
app.post('/post', (req, res) => {
    res.render('index', {
        name : req.body.textname
    });
});

app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000');
});