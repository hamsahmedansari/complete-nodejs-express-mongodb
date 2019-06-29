const express = require("express");
const app = express();
const path = require("path");

const publicDirPath = path.join(__dirname, "./public");

app.use(express.static(publicDirPath));

app.get("/", function(req, res) {
  res.send("<h1>Welcome to world of Express</h1>");
});

app.get("/helloworld", function(req, res) {
  res.send({
    name: "Aamir",
    msg: "Hello world"
  });
});

app.listen(3000, () => {
  console.log("server is up, check http://localhost:3000");
});
