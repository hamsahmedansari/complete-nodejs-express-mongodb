const express = require("express");
const Profiles = require("../models/profiles");
const routes = express.Router();

routes.post("/profiles", async (req, res) => {
  try {
    const profile = await Profiles(req.body).save();
    res.send(profile);
  } catch (e) {
    res.status(400).send(e);
  }
});
routes.get("/profiles", async (req, res) => {
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

routes.delete("/profiles/:id", async (req, res) => {
  try {
    const profile = await Profiles.findByIdAndDelete(req.params.id);
    if (!profile) {
      res.status(404).send();
    }
    res.send(profile);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = routes;
