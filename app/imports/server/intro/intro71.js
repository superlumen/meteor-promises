export const useSomePromiseReturningProcess = _ids => {
  return new Promise((resolve, reject) => {
    getSomeDataWithCallback(_id, (error, result) => {
      if (error) {
        return reject(error);
      } else {
        return resolve(result);
      }
    });
  });
};
