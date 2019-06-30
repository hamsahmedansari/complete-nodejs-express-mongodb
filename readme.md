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

1. Just run command `node index.js`
2. Open `http://localhost:3000/`

# Output

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

## Requirement

1. Make a app that show

   - Country name, region

   - TOP 5 news and

   - current weather in celsius of user location

2. User location will be based on IP address if no location is provided by user on command prompt

## Important Note

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
