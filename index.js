const express = require("express");
const app = express();
const path = require("path");

const publicDirPath = path.join(__dirname, "./public");
const viewFolderPath = path.join(__dirname, "./templates");

app.set("view engine", "hbs");
app.set("views", viewFolderPath);
app.use(express.static(publicDirPath));

// app.get("/", (req, res) => {
//   res.render("index");
// });

app.get("/", (req, res) => {
  res.render("index", {
    title: "This is dynamic data page",
    course: "We are learning this in our express class",
    teacher: "Aamir Pinger"
  });
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
