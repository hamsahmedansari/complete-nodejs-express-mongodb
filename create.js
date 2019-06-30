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
    db.collection("profile").insertOne(
      {
        _id: newId,
        name: "Pinger",
        email: "aamirpinger@yahoo.com"
      },
      (error, response) => {
        if (error) {
          return console.log("Enable to add");
        }

        console.log(response.ops);
      }
    );
    console.log("DB connected successfully!");
  }
);
