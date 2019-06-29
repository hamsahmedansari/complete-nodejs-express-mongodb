const fs = require("fs");
const chalk = require("chalk");

let data = [];

const loadData = () => {
  try {
    const rawData = fs.readFileSync("data.txt");
    const jsnStr = rawData;
    return JSON.parse(jsnStr);
  } catch (err) {
    return [];
  }
};

const addTask = (title, description) => {
  data = loadData();

  const newTask = {
    title,
    description
  };

  const duplicate = chkForDuplicate(title, data);

  if (!duplicate) {
    const newData = [...data, newTask];
    saveTask(newData);
    console.log("New Todo task added!!");
  } else {
    console.log("Task already present!");
  }
};

const saveTask = newData => {
  const mergedData = JSON.stringify(newData);
  fs.writeFileSync("data.txt", mergedData);
};

const chkForDuplicate = (title, data) => {
  const duplicateData = data.find(d => d.title === title);
  return !duplicateData ? false : true;
};
const deleteTask = title => {
  data = loadData();

  const filteredData = data.filter(d => d.title !== title);

  const taskFound = filteredData.length !== data.length;

  if (taskFound) {
    saveTask(filteredData);
    console.log(chalk.bgGreen.bold(`Todo task - ${title} - removed!!`));
  } else {
    console.log(chalk.bgRed.bold("Task not found!"));
  }
};

const listTasks = () => {
  const data = loadData();
  if (data.length === 0) {
    console.log(chalk.inverse.bold("No Tasks to list!"));
  } else {
    data.map(d => {
      console.log(chalk.white.bgBlue.bold(d.title));
      console.log(chalk.blue("   " + d.title));
    });
  }
};

module.exports = {
  addTask,
  listTasks,
  deleteTask
};
