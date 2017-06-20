import { Meteor } from "meteor/meteor";

import Promise from "bluebird";

const getPromise = () => {
  return new Promise((resolve, reject) => {
    Meteor.setTimeout(() => {
      resolve(true);
    }, 200);
  });
};

export default getPromise;
