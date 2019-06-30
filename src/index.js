require("./db/mongoose");
const Profiles = require("./models/profiles");

const newRec = Profiles({
  name: "Aamir",
  age: -1,
  graduate: true
});

newRec
  .save()
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log("error:", e);
  });
