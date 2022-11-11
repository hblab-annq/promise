const promise = new Promise((resolve, reject) => {
  resolve("I FIRED");
  reject(new Error("I DID NOT FIRE"));
});

function onRejected(error) {
  console.log(error.message);
}

function onResolve(message) {
  console.log(message);
}

promise.then(onResolve, onRejected);

// Vỡi mỗi promise, chỉ có thể chạy 1 lần resolve hoặc reject.
// Lưu ý là sau khi chạy xong hàm then() thì sẽ trả ra 1 Promise mới và có thể then tiép
