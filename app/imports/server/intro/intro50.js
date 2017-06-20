import { Meteor } from "meteor/meteor";
import getData from "somePromiseReturningLibrary";

getData(_id)
  .then(data => {
    console.log("got data", data);

    if (!isDataValid(data)) {
      throw new Meteor.Error("invalid-data");
    }

    return getData(data.ids);
  })
  .then(moreData => {
    console.log("now I have more data", moreData);

    // How do we use `data` and `moreData` here?

    return useSomePromiseReturningProcess(moreData);
  })
  .catch(error => {
    console.log("Something went wrong", error);
  });
