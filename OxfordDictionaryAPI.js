var request = require("request");

const word = "chai";
const options = {
  url: "https://od-api.oxforddictionaries.com:443/api/v2/entries/en-gb/" + word, //Change this
  json: true,
  headers: {
    Accept: "application/json",
    app_id: "677d39cb",
    app_key: "3567e7de14aef1b99bc70b82e7bae6e1"
  }
};
request(options, (error, response) => {
  // Print the error if one occurred
  console.log("error:", error);
  // Print the response status code if a response was received
  console.log("statusCode:", response && response.statusCode);
  // Print the HTML for the Google homepage.
  console.log("response:", response && response.body);
});
