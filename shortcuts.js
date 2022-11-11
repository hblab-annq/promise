var promise = Promise.reject(new Error("SECRET VALUE"));

promise.catch((error) => {
  console.log(error.message);
});

// có thể dùng hàm catch() để truyền vào reject thay vì then để clean code hơn
