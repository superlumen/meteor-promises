export const useSomePromiseReturningProcess = _ids => {
  return new Promise((resolve, reject) => {
    // Do something async
    setTimeout(() => {
      resolve({ some: "data" });
    }, 100);
  });
};
