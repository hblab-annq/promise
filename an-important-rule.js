// Khi nhiều hàm then() throw exception, promise sẽ tìm đến hàm reject/catch() tiếp theo để chạy

const alwaysThrows = () => {
  throw new Error("OH NOES");
};

const iterate = (i) => {
  console.log(i);
  return i + 1;
};

const p = Promise.resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch((e) => console.log(e.message));
