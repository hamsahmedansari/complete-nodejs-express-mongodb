const mongoose = require("mongoose");
const Profiles = mongoose.model("Profiles", {
  name: {
    type: String
  },
  age: {
    type: Number
  },
  graduate: {
    type: Boolean
  },
  email: {
    type: String
  }
});

module.exports = Profiles;
