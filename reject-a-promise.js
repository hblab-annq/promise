const promise = new Promise((success, reject) => {
  reject(new Error("REJECTED!"));
});

function onReject(error) {
  setTimeout(() => console.log(error.message), 300);
}

promise.then((error) => {}, onReject);

// Reject là hàm thực hiện khi có lỗi xảy ra, là params thứ 2 hoặc dùng hàm catch() để gọi
