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
