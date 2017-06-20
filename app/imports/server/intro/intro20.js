import { Meteor } from "meteor/meteor";
import getData from "somePromiseReturningLibrary";

getData(_id)
  .then(data => {
    console.log("got data", data);
    return getData(data.ids);
  })
  // ---------------------------------------------------------------------------
  .then(moreData => {
    console.log("now I have more data", moreData);
  })
  // ---------------------------------------------------------------------------
  .catch(error => {
    console.log("Something went wrong", error);
  });

// Sync or async
