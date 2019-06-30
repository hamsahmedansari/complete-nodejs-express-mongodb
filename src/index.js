const express = require("express");
require("./db/mongoose");
const Profiles = require("./models/profiles");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/profiles", (req, res) => {
  const profile = Profiles(req.body);
  profile
    .save()
    .then(() => {
      res.send(profile);
    })
    .catch(e => {
      res.status(400);
      res.send(e);
    });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
