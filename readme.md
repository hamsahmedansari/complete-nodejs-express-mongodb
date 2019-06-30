<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
# Command Line Arguments

- Yargs Basic
- Yargs Arguments
- Yargs Arguments Advanced
=======
# Request
>>>>>>> 49c9db5457cd9fc00050659717071ccba439b4e3

## Yargs Basic

<<<<<<< HEAD
### Command

```
node yargsBasic.js Aamir

```

### Output

![](https://i.imgur.com/iCuilxB.png)

## Yargs Argument

### Command

```
node yargsArgument.js --help

```

```
node yargsArgument.js --title=Aamir

```

### Output

![](https://i.imgur.com/7fAkICH.png)

## Yargs Argument Advanced

### Command

```
node yargsArgumentAdvance.js  delete -t "hello world"
=======
# File System Module

- JSON.stringify
- JSON.parse
- Writing To The File
- Reading With Exception Handling

## JSON.stringify & JSON.parse

### Stringify

```
const obj = {
  firstName: "Aamir",
  lastName: "Pinger",
  city: "Karachi",
  country: "Pakistan"
};

const jsnStr = JSON.stringify(obj);

console.log(obj);
console.log(jsnStr);
console.log(obj.firstName);
console.log(jsnStr.firstName);

```

### Parse

```
const obj = {
  firstName: "Aamir",
  lastName: "Pinger",
  city: "Karachi",
  country: "Pakistan"
};

const jsnStr = JSON.stringify(obj);

console.log(obj);
console.log(jsnStr);
console.log(obj.firstName);
console.log(jsnStr.firstName);
const newObj = JSON.parse(jsnStr);
console.log(newObj);
>>>>>>> 916363d88aa1229677f7547f4efa5122866e6003

=======
`npm i request`

## Basic Request

### Syntax

`request(options, callback)`

### Options

```
const options = {
   url: 'https://any_API_URL',

   headers: {
 	 anyKey: “Any value required by api provider”,
       Accept: "application/json",
       username: "pakistan",
       password: "356ae6e1"

}
```

### Callback

`function (error, response)`

## Oxford Dictionary API

Checkout there [Website](https://developer.oxforddictionaries.com/) and Get Your API key
** Use Your Own Api key by Changing in OxfordDictionaryAPI.js **

### Add Own Api

```
const options = {
  url: "YOUR API FROM OXFORD DICTIONARY" + word, //Change this
  json: true,
  headers: {
    Accept: "application/json",
    app_id: "677d39cb",
    app_key: "3567e7de14aef1b99bc70b82e7bae6e1"
  }
};
>>>>>>> 49c9db5457cd9fc00050659717071ccba439b4e3
```

### Output
<<<<<<< HEAD

![](https://i.imgur.com/iOQzcaC.png)
=======

![](https://i.imgur.com/xnarPlK.png)

## Writing & Reading To The File

#### Writing in File

`node write.js`

#### Reading in File

`node read.js`

#### Reading in File with Error Handing

`node readingFromFile.js`

### Output

![](https://i.imgur.com/h2Kx4bD.png)
>>>>>>> 916363d88aa1229677f7547f4efa5122866e6003
=======
# Todo App

## Requirement

We need to make 4 functionality for users to use

1. Add new Todo Task
2. Remove particular Task
3. Read a Task
4. List all Todo Tasks

### Add new Todo Task

- User will input two values as command line input for new Todo Task

  1.  Title
  2.  Description

- These both will be string values and mandatory
- Then add into data.txt if that title is not already present in the data file

### Remove particular Task

- User Input setting is done
- Now let do coding for task to get deleted if already present in data.txt file
- If task not found throw a message to inform user

## Result

### Add new Todo Task

#### Command

`node index.js add -t "prepare node slides" -d "node slide to be prepared before saturday"`

#### Output

![](https://i.imgur.com/PTQNio0.png)

### Remove particular Task

#### Command

`node index.js delete -t "prepare node slides"`

#### Output

![](https://i.imgur.com/ZHYhVHB.png)

### List all Todo Tasks

#### Command

`node index.js all`

#### Output

![](https://i.imgur.com/l5vycUy.png)

### Read a Single Task

#### Command

`node index.js get -t "prepare node slides"`

#### Output

![](https://i.imgur.com/xJvsrUT.png)

### Help

#### Command

`node index.js --help`

### Output

![](https://i.imgur.com/Z7joaDo.png)
>>>>>>> 62fe55c85761d2754ec3e27d7c6f2c8770fe3f2b
=======
# Asynchronous Requests

1. Simple Asynchronous Requests

## Asynchronous Requests

### Code

```
console.log("Testing asynchronous example start");

setTimeout(() => console.log("Async code after a pause of 3 seconds"), 3000);

setTimeout(() => console.log("Async after a pause of 0 seconds"), 0);

console.log("Testing asynchronous example ends");

```

### Run

`node SimpleAsyncRequest.js`

### Output

<<<<<<< HEAD
![](https://i.imgur.com/FFrwmbI.png)
>>>>>>> d570c37f1a22b589c10c417d2b8c49f6435697f7
=======
![](https://i.imgur.com/iPpyEwa.png)

## Get Response in JSON

Add Following Code in ** Request's Option **

### Before

```
const options = {
  url: "YOUR API FROM OXFORD DICTIONARY" + word, //Change this
  headers: {
    Accept: "application/json",
    app_id: "677d39cb",
    app_key: "3567e7de14aef1b99bc70b82e7bae6e1"
  }
};
```

### After

```
const options = {
  url: "YOUR API FROM OXFORD DICTIONARY" + word, //Change this
  json: true,
  headers: {
    Accept: "application/json",
    app_id: "677d39cb",
    app_key: "3567e7de14aef1b99bc70b82e7bae6e1"
  }
};
=======
# Express
=======
# Serving static files in Express
>>>>>>> d01624b25d31dfb53ce217ba2f3b886c715f4b7d
=======
# Serving Dynamic files in Express
>>>>>>> 63dca4106356bdbad2b9a5a77d0a192445d7a41b
=======
# Partials
>>>>>>> 7fdd1b1554e4afacc3a10b730cb9ccdc7531074a
=======
# QUERY STRING
>>>>>>> 6c5e6668bc6dfe42f77e001f7c41996c1959fed2
=======
# FETCH API
>>>>>>> 97120518d02839cae101201db80773fb35ed2c19

1. Just run command `node index.js`
2. Open `http://localhost:3000/`

# Output

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

## Universal Routing

Add these and check result

```
app.get('/docs/*', function(req, res){
 res.send('No document found')
})
app.get('*', function(req, res){
 res.send('404 Error Page')
})
>>>>>>> 99cd1fead05fab0937d7686dc3f0106569819410
```

## Render Html

Check `renderHtml.js` and run `node renderHtml.js`

## OutPut

<<<<<<< HEAD
![](https://i.ibb.co/0sgjqjF/Screenshot-from-2019-06-29-16-30-28.png)

# Useful Apis

1. News API

   - https://newsapi.org

2. Weather API

   - https://developer.accuweather.com/

3. Geolocation API [longitude,latitude] of any address

   - https://docs.mapbox.com/api/search/#geocoding

4. Location details based on IP address (You can use request-ip npm module to get client side ip)
   - https://ipgeolocation.io/
>>>>>>> 49c9db5457cd9fc00050659717071ccba439b4e3
=======
![](https://i.ibb.co/DL9TXds/Screenshot-from-2019-06-29-18-10-32.png)
![](https://i.ibb.co/0VRNZTs/Screenshot-from-2019-06-29-18-10-11.png)
![](https://i.ibb.co/9HqVRZS/Screenshot-from-2019-06-29-18-10-19.png)
![](https://i.ibb.co/VY7gFMV/Screenshot-from-2019-06-29-18-19-03.png)
![](https://i.ibb.co/jbQ6MfH/Screenshot-from-2019-06-29-18-19-06.png)
![](https://i.ibb.co/CVP6PnY/Screenshot-from-2019-06-29-18-25-34.png)
>>>>>>> 99cd1fead05fab0937d7686dc3f0106569819410
=======
# All That Matters
=======
# All That Matters a Web App

ALL THAT MATTER CLI APP into a web app
>>>>>>> 775e1dd890b1477297a41c1e898c0a748381a60d
=======
# MongoDB

## Overview
>>>>>>> 60be7579cfd3d075945af73c27d469bebae6a2c4

- MongoDB is an open source database and it's also available for all operating systems
- MongoDB is not just exclusive to nodejs, we can use it with other programing languages as well
- MongoDB is NoSQL database which is different from SQL databases like mySQL and PostgreSQL
- SQL is an abbreviation of Structured Query Language
- NoSql is Not Only SQL

## Installation

### MongoDb

1. Download from [Here](https://www.mongodb.com/download-center/community)
2. Follow On Screen Instruction
3. Done!!!

### MongoDB Admin Tool

1. Download from [Here](https://robomongo.org/download)

### MongoDB + NodeJs

<<<<<<< HEAD
Make sure you show only relevant part of response received from every API and don’t forget to handle errors

## Tips

- Use accuweather [city search api](http://dataservice.accuweather.com/locations/v1/cities/search?apikey=LCQRbJLFlAVF6bTBJYdhy8drquSRmcfs&q=karachi) to get city key that can then be use to get 1 day [forecast](http://dataservice.accuweather.com/forecasts/v1/daily/1day/261158?apikey=LCQRbJLFlAVF6bTBJYdhy8drquSRmcfs)
- Use process.argv to directly get the city name, expect user to write node app karachi
- Use request-ip npm module to get client side ip
>>>>>>> f44f609358d5be30fb4a061a178b24b5ddf2cdb2
=======
![](https://i.ibb.co/0cMrbSv/Screenshot-from-2019-06-29-18-41-14.png)
![](https://i.ibb.co/YTkymFC/Screenshot-from-2019-06-29-18-41-17.png)
>>>>>>> d01624b25d31dfb53ce217ba2f3b886c715f4b7d
=======
![](https://i.ibb.co/v32MM4D/Screenshot-from-2019-06-29-18-49-28.png)
>>>>>>> 63dca4106356bdbad2b9a5a77d0a192445d7a41b
=======
![](https://i.ibb.co/FKK5vqm/Screenshot-from-2019-06-30-15-41-47.png)
>>>>>>> 7fdd1b1554e4afacc3a10b730cb9ccdc7531074a
=======
## Simple

![](https://i.ibb.co/gMH86jw/Screenshot-from-2019-06-30-15-46-56.png)

## With Request

![](https://i.ibb.co/9y6Nf8m/Screenshot-from-2019-06-30-15-53-48.png)
>>>>>>> 6c5e6668bc6dfe42f77e001f7c41996c1959fed2
=======
![](https://i.ibb.co/vzStDmp/Screenshot-from-2019-06-30-16-00-56.png)
>>>>>>> 97120518d02839cae101201db80773fb35ed2c19
=======
1. `npm init -y`
2. `npm i mongodb`
>>>>>>> 60be7579cfd3d075945af73c27d469bebae6a2c4
=======
# CRUD

1. Create
2. Read
3. Update
4. Delete

## Connection

|   Action   |  File Name   |      Command      |
| :--------: | :----------: | :---------------: |
| Connection | `mongodb.js` | `node mongodb.js` |

## Create

|  Action  |  File Name  |     Command      |                                                              Code                                                              |
| :------: | :---------: | :--------------: | :----------------------------------------------------------------------------------------------------------------------------: |
|  Simple  | `create.js` | `node create.js` | [Click Here](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/1318b559409bf5679d3524ccc4b12c2dbb067bd6) |
| Multiple | `create.js` | `node create.js` | [Click Here](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/42ea04900c303e932e52fd12ecc2c64334ad20bf) |
| Callback | `create.js` | `node create.js` | [Click Here](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/d526abcac1f0c8298d619f0e65675fd8d0c82c05) |
|   \_ID   | `create.js` | `node create.js` | [Click Here](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/290f827ae4d7b213afb936f3e57185f70dc7dfd9) |

## Read

| Action  | File Name |    Command     |                                                              Code                                                              |
| :-----: | :-------: | :------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| Simple  | `read.js` | `node read.js` | [Click Here](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/e7bfc49274c11cba37df8631193276d3b3ef9138) |
| FindOne | `read.js` | `node read.js` | [Click Here](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/2bb5beadf1172ea4431b3ae79d4fae216b329388) |
|  Find   | `read.js` | `node read.js` | [Click Here](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/193c8b98cf3d133a2e80d4b8455ad142ec05eaaf) |

## Update

| Action  |  File Name  |     Command      |                                                              Code                                                              |
| :-----: | :---------: | :--------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| Simple  | `update.js` | `node update.js` | [Click Here](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/564807975143d3d3a37fda68eb40953810f19ff0) |
| FindOne | `update.js` | `node update.js` | [Click Here](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/282d54a8bc49b6a7e250c0f39dc9f4179ab5e49e) |

## Delete

| Action |  File Name  |     Command      |                                                              Code                                                              |
| :----: | :---------: | :--------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| Simple | `delete.js` | `node delete.js` | [Click Here](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/632166ea65c03edad67aaf3c430005b836208ab5) |
>>>>>>> 0a816db4462cecc6400ebc386a82a17f2576f10d
=======
# Mongoose

- [Mongoose Simple](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/083e1cfc21c052f1345c444db2861591caeaf443)
- [Basic Mongoose Validation](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/ae8a5bc05acba5c092ab192cac8a67a8a43eea42)
- [Mongoose Validation](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/129da9d01bb2ec88c7855dbc6f532475d7c8eed6)
- [Mongoose SchemaType Options](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/a2c1c7b56470f41cb4b97d585eb14f792c332807)

## Installation

`npm i mongoose`
>>>>>>> af896d2c2ef2c2e8bb8badfb58de869a5e41f800
=======
# REST API

## Basic Setup

1. `npm install express`
1. `npm install nodemon --save-dev`
1. `npm run dev`

- Create/Post

  [Click Here](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/31d3426b2bf41ff0c8ed8e52f81b23d0170e5960)

- Promise Chaining

  [Click Here](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/790d17b14c841d1ceb33d8dc2bf45c74b058125a)

- Async / await

  [Click Here](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/36b5b0073a4130d13db0739451e93bb30d8b8589)

- Create/Get

  [Click Here](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/9cdca961952dfc863d5eb796112938aa86a5b02e)

- Update / Patch

  [Click Here](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/1b8bf606ba9ebb775837830b4e475b33fdff3017)

- Delete

  [Click Here](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/a5b7152f74b00ea3d1af0c154c073d76b0d4b28c)

- Separating Router to different files

  [Click Here](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/534565b93e207db09143996897292c14f04dc664)

- Password stored as a hash value
  - Install bcryptjs `npm i bcryptjs`
  - [Click Here](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/113871c6d759c64295a85211c461f6029bd66f4b)
- User Login
  [Click Here](https://github.com/hamsahmedansari/complete-nodejs-express-mongodb/tree/f7c7cc716414475e9bda1880d46a2075ba53bf8b)
- Web Tokens
  - Install jsonwebtoken `npm i jsonwebtoken`
    [Click Here]()
>>>>>>> 929b496c716a8d180a1a4cae104ec57ef067db0b
