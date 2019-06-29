const express = require("express");
const app = express();

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
