// fullfill là hàm thành công khi chạy 1 promise, thực hiện khi đúng và không có lỗi gì xảy ra

const promise = new Promise((success, reject) => {
  success("FULFILLED!");
});

promise.then((message) => {
  setTimeout(() => console.log(message), 300);
});
