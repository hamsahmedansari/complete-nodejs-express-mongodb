require("./db/mongoose");
const Profiles = require("./models/profiles");

Profiles.findByIdAndUpdate(
  {
    _id: "5d18a83d27f1bf68fb0aa4b8"
  },
  {
    graduate: false
  }
)
  .then(rec => {
    console.log(rec);
    return Profiles.countDocuments({
      graduate: false
    });
  })
  .then(count => {
    console.log(count);
  });
