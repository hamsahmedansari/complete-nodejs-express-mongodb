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

```

### Output

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
