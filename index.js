const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const publicDirPath = path.join(__dirname, "./public");
// const viewFolderPath = path.join(__dirname, "./templates");
const viewFolderPath = path.join(__dirname, "./templates/views");
const partialFolderPath = path.join(__dirname, "./templates/partials");
app.set("view engine", "hbs");
app.set("views", viewFolderPath);
hbs.registerPartials(partialFolderPath);
app.use(express.static(publicDirPath));

// app.get("/", (req, res) => {
//   res.render("index");
// });

app.get("/", (req, res) => {
  if (!req.query.teacher) {
    return res.send({ error: "Teacher name not provided!" });
  } else if (!req.query.course) {
    return res.send({ error: "Course name not provided!" });
  }

  const { teacher, course } = req.query;

  res.render("index", {
    title: "This is dynamic data page",
    course: `we are learning this in our ${course} class`,
    teacher
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
