<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
# Command Line Arguments

- Yargs Basic
- Yargs Arguments
- Yargs Arguments Advanced

## Yargs Basic

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

![](https://i.imgur.com/FFrwmbI.png)
>>>>>>> d570c37f1a22b589c10c417d2b8c49f6435697f7
