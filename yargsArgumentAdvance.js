const yargs = require("yargs");

yargs.command({
  command: "delete",
  describe: "Delete record..",
  builder: {
    title: {
      describe: "title to delete",
      alias: "t",
      demandOption: true,
      type: "string"
      //default: '...',
    }
  },
  handler: argv => {
    console.log("Deleting record", argv.title);
  }
});

yargs.parse();
