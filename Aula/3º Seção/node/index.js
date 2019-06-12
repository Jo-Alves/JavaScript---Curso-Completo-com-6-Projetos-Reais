const express = require("express")
let consign = require("consign");
let bodyParser = require("body-parser");
let expressValidator = require("express-validator");

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());

consign().include("routes").include("utils").into(app);


app.listen(3003, "127.0.0.1", () => {
    console.log("servidor rodando!");
});