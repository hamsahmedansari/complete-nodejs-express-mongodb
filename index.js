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
