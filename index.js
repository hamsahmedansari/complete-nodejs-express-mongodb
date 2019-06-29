const yargs = require("yargs");
const { addTask, deleteTask } = require("./todo");

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

yargs.parse();
