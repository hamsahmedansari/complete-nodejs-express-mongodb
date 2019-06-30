const { MongoClient, ObjectId } = require("mongodb");
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "myDB";

const newId = ObjectId();
console.log(newId);
console.log(newId.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Error connecting database!");
    }

    const db = client.db(databaseName);
    db.collection("profile")
      .deleteMany({ email: "irfanali@xyz.com" })
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });

    console.log("DB connected successfully!");
  }
);
