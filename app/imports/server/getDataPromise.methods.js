import { Meteor } from "meteor/meteor";

import getDataPromise from "./getDataPromise.service";

Meteor.methods({
  getDataPromise: () => {
    return getDataPromise();
  }
});
