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
>>>>>>> 99cd1fead05fab0937d7686dc3f0106569819410
