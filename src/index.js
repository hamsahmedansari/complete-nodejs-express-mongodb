const express = require("express");
require("./db/mongoose");
const Profiles = require("./models/profiles");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/profiles", async (req, res) => {
  try {
    const profile = await Profiles(req.body).save();
    res.send(profile);
  } catch (e) {
    res.status(400).send(e);
  }
});
app.get("/profiles", async (req, res) => {
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

app.get("/profiles/:id", async (req, res) => {
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

app.patch("/profiles/:id", async (req, res) => {
  const fieldsToUpdate = Object.keys(req.body);
  const fieldsInModel = ["name", "age", "graduate", "email"];
  const isUpdateAllowed = fieldsToUpdate.every(field =>
    fieldsInModel.includes(field)
  );

  if (!isUpdateAllowed) {
    return res.status(400).send({ error: "Invalid fields!" });
  }

  try {
    const profile = await Profiles.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!profile) {
      return res.status(404).send();
    }
    res.send(profile);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
