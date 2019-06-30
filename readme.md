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
