function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

console.log("Promise lecture starts");
delayFn(1000).then(() => console.log("after 10 seconds promise resolved"));
console.log("end");