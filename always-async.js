const promise = new Promise((resolve, reject) => {
  resolve("PROMISE VALUE");
});

promise.then((message) => {
  console.log(message);
});
console.log("MAIN PROGRAM");

// Promise chạy bất đồng bộ
