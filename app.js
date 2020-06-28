//express
const express = require('express');
const app = express();

//static
app.use(express.static('public'));

//parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routing
app.get('/test', function(req, res, next) {
	res.send("hello world !!!");
});

app.get('/ejs', function(req, res, next) {
	res.render("../views/index.ejs", {message : "ichikawa"});
});

const apiModel = require("./models/apiModel");
app.post('/api', apiModel.exec);

app.listen("80");

console.log("server start");
