<<<<<<< HEAD
const yargs = require("yargs");
const { addTask, deleteTask, listTasks, getTask } = require("./todo");

yargs.command({
  command: "add",
  describe: "This command is used to add a Todo task.",
  builder: {
    title: {
      describe: "Todo task title to add",
      alias: "t",
      demandOption: true,
      type: "string"
    },
    description: {
      describe: "Todo task description",
      alias: "d",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    addTask(argv.title, argv.description);
  }
});
yargs.command({
  command: "delete",
  describe: "This command is used to delete a Todo task.",
  builder: {
    title: {
      describe: "Todo task title to delete",
      alias: "t",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    deleteTask(argv.title);
  }
});
yargs.command({
  command: "all",
  describe: "This command is used to List All Todo's task.",
  handler: function(argv) {
    listTasks();
  }
});
yargs.command({
  command: "get",
  describe: "This command is used to Get Single  Todo task.",
  builder: {
    title: {
      describe: "Todo task title to Get",
      alias: "t",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    getTask(argv.title);
  }
});
yargs.parse();
=======
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
>>>>>>> 99cd1fead05fab0937d7686dc3f0106569819410
