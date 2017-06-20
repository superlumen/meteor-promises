import { Meteor } from "meteor/meteor";

import Coll from "/imports/server/Coll.collection";

const getDataPromise = () => {
  const data = Coll.find().fetch();

  return new Promise((resolve, reject) => {
    Meteor.setTimeout(() => {
      resolve(data);
    }, 1200);
  });
};

export default getDataPromise;
