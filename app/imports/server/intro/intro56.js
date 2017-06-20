import { Meteor } from "meteor/meteor";
// -----------------------------------------------------------------------------
import Promise from "bluebird";
// -----------------------------------------------------------------------------
import getData from "somePromiseReturningLibrary";

// -----------------------------------------------------------------------------
Promise.resolve(true)
  .then(() => {
    return getData(_id);
  })
  // ---------------------------------------------------------------------------
  .then(data => {
    console.log("got data", data);

    if (!isDataValid(data)) {
      throw new Meteor.Error("invalid-data");
    }

    return [data, getData(data.ids)];
  })
  .spread((data, moreData) => {
    console.log("now I have more data", moreData);

    // How do we use `data` and `moreData` here?

    return useSomePromiseReturningProcess(moreData);
  })
  .catch(error => {
    console.log("Something went wrong", error);
  });

// Why does this work?
