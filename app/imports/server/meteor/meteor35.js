import { Meteor } from "meteor/meteor";

import Promise from "bluebird";
import { Promise as MeteorPromise } from "meteor/promise";

import getMeteorPromise from "/imports/server/getMeteorPromise.service";
import Coll from "/imports/server/Coll.collection";

const getMeteorData = () => {
  return new MeteorPromise((resolve, reject) => {
    return resolve(Coll.find().fetch());
  });
};

Meteor.startup(() => {
  // Let's try some promise magic...
  Promise.try(() => {
    return getMeteorData();
  }).then(data => {
    console.log("Got the data", data);
  });
});
