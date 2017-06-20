import { Meteor } from "meteor/meteor";

// import Promise from "bluebird";

import getMeteorPromise from "/imports/server/getMeteorPromise.service";
import Coll from "/imports/server/Coll.collection";

Meteor.startup(() => {
  // Let's try some promise magic...
  return getMeteorPromise().then(() => {
    console.log("Get the first ID");

    const _id = Coll.findOne()._id;

    console.log("Got the first ID", _id);
  });
});

// How can we use bluebird and meteor promises?
