const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be positive number");
      }
    }
  },
  graduate: {
    type: Boolean,
    default: false
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid!");
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw Error('Password cannot contain "password"');
      }
    }
  }
});

profileSchema.pre("save", async function(next) {
  const profile = this;

  console.log(profile.password, "updated password");
  if (profile.isModified("password")) {
    profile.password = await bcrypt.hash(profile.password, 8);
  }
  console.log(profile.password, "hashed password");
  next();
});
const Profiles = mongoose.model("Profiles", profileSchema);
module.exports = Profiles;
