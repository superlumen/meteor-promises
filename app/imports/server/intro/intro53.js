import { Meteor } from "meteor/meteor";
import getData from "somePromiseReturningLibrary";

let data, moreData;

getData(_id)
  .then(r => {
    // -------------------------------------------------------------------------
    data = r;
    // -------------------------------------------------------------------------

    console.log("got data", data);

    if (!isDataValid(data)) {
      throw new Meteor.Error("invalid-data");
    }

    return getData(data.ids);
  })
  .then(r => {
    // -------------------------------------------------------------------------
    moreData = r;
    // -------------------------------------------------------------------------

    console.log("now I have more data", data, moreData);

    // How do we use `data` and `moreData` here?

    return useSomePromiseReturningProcess(moreData);
  })
  .catch(error => {
    console.log("Something went wrong", error);
  });
