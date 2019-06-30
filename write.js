const fs = require("fs");

const obj = {
  firstName: "Aamir",
  lastName: "Pinger",
  city: "Karachi",
  country: "Pakistan"
};

const jsnStr = JSON.stringify(obj);

fs.writeFileSync("data.txt", jsnStr);

//fs.appendFileSync('data.txt', jsnStr)
