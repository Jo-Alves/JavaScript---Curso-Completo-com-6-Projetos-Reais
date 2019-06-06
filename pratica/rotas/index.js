let express = require('express');

let consign = require("consign");

let bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

consign().include("rotas").into(app);

app.listen(3003, "127.0.0.1", ()=>{
    console.log("Servidor rodando na porta 3003...");
})

