const express = require("express");
const app = express();

// get method check route and invoke callback function provided
app.get("/", function(req, res) {
  res.send("Welcome to world of Express");
});
app.get("/helloworld", function(req, res) {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("server is up, check http://localhost:3000");
});
