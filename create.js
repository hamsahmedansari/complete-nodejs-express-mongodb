const mongodb = require("mongodb");
// To initialize the connection
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "myDB";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Error connecting database!");
    }
    const db = client.db(databaseName);

    db.collection("profile").insertMany([
      {
        name: "Irfan",
        email: "irfanali@xyz.com"
      },
      {
        name: "Zia Khan",
        email: "zia@panacloud.com"
      }
    ]);

    console.log("DB connected successfully!");
  }
);
