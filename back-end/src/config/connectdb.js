import mongoose from "mongoose";
import config from "./config.json" assert {type: 'json'};

const connectdb = async () => {
  await mongoose.connect(config.db.dburl, {
      dbName: config.db.dbName
  });
};
export default connectdb;