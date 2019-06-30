const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const request = require("request");

const publicDirPath = path.join(__dirname, "./public");
// const viewFolderPath = path.join(__dirname, "./templates");
const viewFolderPath = path.join(__dirname, "./templates/views");
const partialFolderPath = path.join(__dirname, "./templates/partials");
app.set("view engine", "hbs");
app.set("views", viewFolderPath);
hbs.registerPartials(partialFolderPath);
app.use(express.static(publicDirPath));

app.get("/", (req, res) => {
  res.render("index");
});

// app.get("/", (req, res) => {
//   if (!req.query.teacher) {
//     return res.send({ error: "Teacher name not provided!" });
//   } else if (!req.query.course) {
//     return res.send({ error: "Course name not provided!" });
//   }

//   const { teacher, course } = req.query;

//   res.render("index", {
//     title: "This is dynamic data page",
//     course: `we are learning this in our ${course} class`,
//     teacher
//   });
// });
// API CALL BASED ON QUERY STRING
app.get("/search", (req, res) => {
  const { word } = req.query;
  if (!word) {
    return res.send({ error: "Word not provided!" });
  }
  const options = {
    url:
      "https://od-api.oxforddictionaries.com:443/api/v2/entries/en-gb/" + word,
    headers: {
      Accept: "application/json",
      app_id: "677d39cb",
      app_key: "3567e7de14aef1b99bc70b82e7bae6e1"
    },
    json: true
  };
  const callback = (error, response) => {
    console.log("error: ", error);
    console.log("status code: ", response && response.statusCode);
    const data = {
      word,
      error,
      definition:
        response &&
        response.body.results[0].lexicalEntries[0].entries[0].senses[0].definitions.toString()
    };
    return res.send({ data });
  };
  request(options, callback);
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
