var express = require('express');
var app = express();

server.listen(process.env.PORT || 3000);
console.log('server running...');
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
})