// Multiple promises

const all = (p1, p2) => {
  const promise = new Promise((res, rej) => {
    let counter = 0;
    let out = [];

    p1.then((c) => {
      out[0] = c;
      counter++;
      if (counter == 2) {
        res(out);
      }
    });
    p2.then((c) => {
      out[1] = c;
      counter++;
      if (counter == 2) {
        res(out);
      }
    });
  });
  return promise;
};

all(getPromise1(), getPromise2()).then(console.log);
