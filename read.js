const { MongoClient, ObjectId } = require("mongodb");

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
    db.collection("profile").findOne(
      { email: "aamirpinger@yahoo.com" },
      (error, data) => {
        if (error) {
          return console.log("Unable to fetch");
        }

        if (data) {
          console.log(data);
        } else {
          console.log("no user found");
        }
      }
    );
    console.log("DB connected successfully!");
  }
);
