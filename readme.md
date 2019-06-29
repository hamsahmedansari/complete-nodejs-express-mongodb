# Express

## Installation

`npm i express`

## Hello World in ExpressJs

1. Add following code in `index.js`

```
const express = require("express");
const app = express();

// get method check route and invoke callback function provided
app.get("/", function(req, res) {
  res.send("Welcome to world of Express");
});
app.get("/helloworld", function(req, res) {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("server is up, check http://localhost:3000");
});

```

2. Then Run `node index.js`
3. Open Browser Following routes

   - `http://localhost:3000/helloworld`
   - `http://localhost:3000/`

4. To Exist Press `Ctrl +C` in your Terminal/Cmd

## OutPut

![](https://i.ibb.co/DL9TXds/Screenshot-from-2019-06-29-18-10-32.png)
![](https://i.ibb.co/0VRNZTs/Screenshot-from-2019-06-29-18-10-11.png)
![](https://i.ibb.co/9HqVRZS/Screenshot-from-2019-06-29-18-10-19.png)
