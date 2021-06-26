const express = require("express");
//const bodyParser = require("body-parser");
const app = express();



app.set('view engine','ejs');
app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/",(req,res) => {
    res.render("index");
});

app.get("/perguntar",(req, res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta",(req,res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulário recebido! titulo " + titulo + " " + "descricao " + descricao);
});

app.listen(8080,()=>{console.log("App rodando!");});