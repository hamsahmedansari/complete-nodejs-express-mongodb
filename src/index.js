require("./db/mongoose");
const Profiles = require("./models/profiles");

const newRec = Profiles({
  name: "Aamir",
  age: 38,
  graduate: true,
  email: "aamirpinger@yahoo.com"
});

newRec
  .save()
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log("error:", e);
  });
