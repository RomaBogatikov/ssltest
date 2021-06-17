const express = require("express");
const https = require("https");
const http = require("http");
const fs = require("fs");

// const options = {
//   key: fs.readFileSync("/srv/www/keys/my-site-key.pem"),
//   cert: fs.readFileSync("/srv/www/keys/chain.pem")
// };

const app = express();

app.use((req, res) => {
  res.writeHead(200);
  res.end("hello world\n");
});

app.listen(8000);

// https.createServer(app).listen(8080);
// http.createServer(options, app).listen(8080);
http.createServer(app).listen(8080);