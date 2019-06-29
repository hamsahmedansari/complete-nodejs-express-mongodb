const yargs = require("yargs");
const { addTask } = require("./todo");

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

yargs.parse();
