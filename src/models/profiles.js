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
    unique: true,
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

profileSchema.statics.findByCredentials = async (email, password) => {
  const profile = await Profiles.findOne({ email });

  if (!profile) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, profile.password);

  if (!isMatch) {
    throw new Error("Unable to login");
  }

  return profile;
};

const Profiles = mongoose.model("Profiles", profileSchema);

module.exports = Profiles;
