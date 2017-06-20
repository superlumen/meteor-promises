import { Mongo } from "meteor/mongo";

const Coll = new Mongo.Collection("coll");

// Insert a doc if one doesn't exist
if (Coll.find().count() === 0) {
  Coll.insert({ a: "alpha", b: "bravo", c: { d: "delta" } });
}

export default Coll;
