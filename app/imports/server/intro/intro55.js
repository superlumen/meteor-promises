import { Meteor } from "meteor/meteor";
import Promise from "bluebird";
import getData from "somePromiseReturningLibrary";

getData(_id)
  .then(data => {
    console.log("got data", data);

    if (!isDataValid(data)) {
      throw new Meteor.Error("invalid-data");
    }

    return [data, getData(data.ids)];
    //     ^^^^^^                  ^
  })
  .spread((data, moreData) => {
    //    ^^^^^^^^^^^^^^^^
    console.log("now I have more data", moreData);

    return useSomePromiseReturningProcess(moreData);
  })
  .catch(error => {
    console.log("Something went wrong", error);
  });

// Why will this not work?
