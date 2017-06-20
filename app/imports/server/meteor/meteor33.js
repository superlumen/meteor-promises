import { Meteor } from "meteor/meteor";

// import Promise from "bluebird";

import getPromise from "/imports/server/getPromise.service";
import Coll from "/imports/server/Coll.collection";

Meteor.startup(() => {
  // Let's try some promise magic...
  return Promise.resolve(true).then(() => {
    console.log("Get the first ID");

    const _id = Coll.findOne()._id;

    console.log("Got the first ID", _id);
  });
});

// Why does this work?
