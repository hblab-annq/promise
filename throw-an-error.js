const parsePromised = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(process.argv[2]));
    } catch (e) {
      reject(e);
    }
  });
};

parsePromised()
  .then(console.log)
  .catch((e) => console.log(e.message));

// Khi 1 error được throw ra trong 1 function, nó có thể được catch, và sử dụng cho reject
