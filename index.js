//packages- express,cors,bodyParser
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

//modules
var mainCtrl = require('./mainCtrl.js');

//middleware
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname));//looks for html files"index.html"

//endpoints
app.get("/data", mainCtrl.read);
app.post("/data", mainCtrl.create);
app.put("/data/:id", mainCtrl.update);
app.delete("/data/:id", mainCtrl.delete);

//listen
app.listen(9000, function(){
  console.log("A NINJA is listening on 9000")
});
