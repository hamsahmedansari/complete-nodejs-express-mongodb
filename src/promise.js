require("./db/mongoose");
const Profiles = require("./models/profiles");

const updateRecord = async id => {
  try {
    const profile = await Profiles.findByIdAndUpdate(
      {
        _id: id
      },
      {
        graduate: false
      }
    );
    console.log(profile);
    if (!profile) {
      throw Error("User id does not exist");
    }
    const count = await Profiles.countDocuments({
      graduate: false
    });
    console.log(count);
  } catch (e) {
    console.log("error occurred: ", e);
  }
};
updateRecord("123456789012");

// updateRecord('5d18a83d27f1bf68fb0aa4b8')
