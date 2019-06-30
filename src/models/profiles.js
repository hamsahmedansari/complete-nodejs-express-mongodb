const mongoose = require("mongoose");
// const Profiles = mongoose.model("Profiles", {
//   name: {
//     type: String
//   },
//   age: {
//     type: Number
//   },
//   graduate: {
//     type: Boolean
//   },
//   email: {
//     type: String
//   }
// });

const Profiles = mongoose.model("Profiles", {
  name: { type: String },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be positive number");
      }
    },
    graduate: { type: Boolean }
  }
});

module.exports = Profiles;
