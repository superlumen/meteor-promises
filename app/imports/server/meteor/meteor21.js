import { Meteor } from "meteor/meteor";

import getDataPromise from "/imports/server/getDataPromise.service";

Meteor.startup(() => {
  console.log(Meteor.call("getDataPromise"));
});
