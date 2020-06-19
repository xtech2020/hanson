const express = require('express');
const app = express();

app.use(express.static('public'));
	
app.get('/test', function(req, res, next) {
	res.send("hello world !!!");
});

app.get('/ejs', function(req, res, next) {
	res.render("../views/index.ejs", {message : "ichikawa"});
});

app.listen("80");

console.log("server start");
