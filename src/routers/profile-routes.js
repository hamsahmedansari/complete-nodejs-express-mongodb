const express = require("express");
const Profiles = require("../models/profiles");
const routes = express.Router();
const auth = require("../middleware/auth");

routes.post("/profiles", async (req, res) => {
  try {
    const profile = await Profiles(req.body).save();
    const token = await profile.generateAuthToken();
    res.status(201).send({ profile, token });
  } catch (e) {
    res.status(400).send(e);
  }
});
routes.get("/profiles", auth, async (req, res) => {
  try {
    const records = await Profiles.find({});
    if (!records) {
      res.status(404).send();

      res.send(records);
    }
  } catch (e) {
    res.status(500).send();
  }
});

routes.get("/profiles/:id", async (req, res) => {
  const _id = req.params.id;
  console.log(_id);

  try {
    const profile = await Profiles.findById(_id);

    if (!profile) {
      res.status(404).send("No profile found");

      res.send(profile);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});
routes.get("/profiles/myprofile", auth, async (req, res) => {
  // const _id = req.profile._id
  try {
    const profile = req.profile;
    // const profile = await Profiles.findById(_id)

    // if (!profile) {
    //     res.status(404).send("No profile found")
    // }
    res.send(profile);
    //res.send(profile.sendPubliceDataOnly())
  } catch (e) {
    res.status(500).send(e);
  }
});

routes.patch("/profiles/:id", async (req, res) => {
  const changedProfile = req.body;

  const fieldsToUpdate = Object.keys(changedProfile);

  const fieldsInModel = ["name", "age", "graduate", "email", "password"];
  const isUpdateAllowed = fieldsToUpdate.every(field =>
    fieldsInModel.includes(field)
  );

  if (!isUpdateAllowed) {
    return res.status(400).send({ error: "Invalid fields!" });
  }

  try {
    //const profile = await Profiles.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    const profile = await Profiles.findById(req.params.id);
    if (!profile) {
      return res.status(404).send();
    }

    Object.assign(profile, changedProfile);
    await profile.save();
    res.send(profile);
  } catch (e) {
    res.status(400).send(e);
  }
});

routes.patch("/profiles/myprofile", auth, async (req, res) => {
  const changedProfile = req.body;
  const fieldsToUpdate = Object.keys(changedProfile);
  const fieldsInModel = ["name", "age", "graduate", "email", "password"];
  const isUpdateAllowed = fieldsToUpdate.every(field =>
    fieldsInModel.includes(field)
  );
  if (!isUpdateAllowed) {
    return res.status(400).send({ error: "Invalid fields!" });
  }
  try {
    //const profile = await Profiles.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    const profile = req.profile;

    Object.assign(profile, changedProfile);
    await profile.save();
    res.send(profile);
  } catch (e) {
    res.status(400).send(e);
  }
});

routes.delete("/profiles/:id", async (req, res) => {
  try {
    // const profile = await Profiles.findByIdAndDelete(req.profile._id)
    // if (!profile) {
    //     res.status(404).send()
    // }

    await req.profile.remove();
    res.send(profile);
  } catch (e) {
    res.status(500).send();
  }
});

routes.post("/profiles/login", async (req, res) => {
  try {
    const profile = await Profiles.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await profile.generateAuthToken();
    res.send({ profile, token });
  } catch (e) {
    res.status(400).send();
  }
});
routes.post("/profiles/logout", auth, async (req, res) => {
  try {
    const { profile, token } = req;

    profile.tokens = profile.tokens.filter(t => t.token !== token);
    await profile.save();

    res.send();
  } catch (e) {
    res.status(400).send();
  }
});

module.exports = routes;
