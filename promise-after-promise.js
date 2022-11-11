var firstPromise = first();

var secondPromise = firstPromise.then((v) => second(v));

secondPromise.then(console.log);

// Có thể sử dụng nhiều hàm then sau 1 hàm then khác. Vì nó trả về 1 Promise
