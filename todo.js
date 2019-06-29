const fs = require("fs");

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

module.exports = {
  addTask
};
