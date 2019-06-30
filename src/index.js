<<<<<<< HEAD
require("./db/mongoose");
const Profiles = require("./models/profiles");

const newRec = Profiles({
  name: "Aamir",
  email: "axc@abc.com"
});
newRec
  .save()
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log("error:", e);
  });
=======
const express = require("express");
require("./db/mongoose");
const routes = require("./routers/profile-routes");

const app = express();
const port = process.env.PORT || 3000;
// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })
app.use((req, res, next) => {
  if (req.method === "DELETE") {
    res.send("DELETE requests are disabled");
  } else {
    next();
  }
});

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
>>>>>>> 929b496c716a8d180a1a4cae104ec57ef067db0b
