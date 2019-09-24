const express = require("express");
const app = express();
app.get('/', function(req, res) {
    app.use(express.static(__dirname));
    res.sendFile(__dirname + "/" + "index.html");
  });
app.listen(8080);