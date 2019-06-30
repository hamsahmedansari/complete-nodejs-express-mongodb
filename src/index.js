require("./db/mongoose");
const Profiles = require("./models/profiles");

const newRec = Profiles({
  name: "Aamir",
  email: "axc@abc.com"
});
newRec
  .save()
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log("error:", e);
  });
