// 1 Promise có thể trả về values hoặc là 1 Promise khác
// Trong trường hợp trả về 1 value, Promise sẽ tự động wrap value lại và trả về 1 promise nếu có thể

const attachTitle = (f) => {
  return "DR. " + f;
};

const promise = new Promise((resolve, reject) => {
  resolve("MANHATTAN");
});

promise.then(attachTitle).then((m) => console.log(m));
