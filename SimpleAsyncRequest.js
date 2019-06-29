console.log("Testing asynchronous example start");

setTimeout(() => console.log("Async code after a pause of 3 seconds"), 3000);

setTimeout(() => console.log("Async after a pause of 0 seconds"), 0);

console.log("Testing asynchronous example ends");
