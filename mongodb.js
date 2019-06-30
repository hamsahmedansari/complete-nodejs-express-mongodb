const mongodb = require("mongodb");
// To initialize the connection
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Error connecting database!");
    }

    console.log("DB connected successfully!");
  }
);
