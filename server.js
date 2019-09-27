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

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });