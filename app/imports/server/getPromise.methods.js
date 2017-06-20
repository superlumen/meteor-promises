import { Meteor } from "meteor/meteor";

import getPromise from "/imports/server/getPromise.service";

Meteor.methods({
  getPromise: () => {
    return getPromise();
  }
});
