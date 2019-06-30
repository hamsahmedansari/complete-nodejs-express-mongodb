const mongoose = require("mongoose");
const validator = require("validator");

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
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid!");
      }
    }
  }
});

module.exports = Profiles;
