const express = require("express");
const app = express();
app.get('/holiday', function(req, res) {
    app.use(express.static(__dirname));
    res.sendFile(__dirname+'/holiday.html')
});
app.get('/liff', function(req, res) {
  app.use(express.static(__dirname));
  res.sendFile(__dirname+'/liff.html')
});
app.get('/pdf', function(req, res) {
  app.use(express.static(__dirname));
  res.sendFile(__dirname+'/spare.html')
});
app.get('/gmail', function(req, res) {
  app.use(express.static(__dirname));
  res.sendFile(__dirname+'/gmail.html')
});


  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });