import { Meteor } from "meteor/meteor";
import getData from "somePromiseReturningLibrary";

let params = {};

getData(_id)
  .then(data => {
    // -------------------------------------------------------------------------
    params.data = data;
    // -------------------------------------------------------------------------

    console.log("got data", data);

    if (!isDataValid(data)) {
      throw new Meteor.Error("invalid-data");
    }

    return getData(data.ids);
  })
  .then(moreData => {
    // -------------------------------------------------------------------------
    params.moreData = moreData;
    // -------------------------------------------------------------------------

    console.log("now I have more data", params.data, moreData);

    // How do we use `data` and `moreData` here?

    return useSomePromiseReturningProcess(moreData);
  })
  .catch(error => {
    console.log("Something went wrong", error);
  });
