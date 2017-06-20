import getData from "somePromiseReturningLibrary";

getData(_id)
  .then(data => {
    console.log("got data", data);
  })
  .catch(error => {
    console.log("Something went wrong", error);
  });
