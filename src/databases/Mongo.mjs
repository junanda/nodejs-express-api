import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

class Mongo {
  getConnection() {
    if (!Mongo.instance) {
      mongoose.connect(
        `${process.env.DB_TYPE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/`,
        {
          dbName: process.env.DB_NAME,
        }
      );
      Mongo.instance = mongoose.connection;
      // console.info("new instance");
    }
    return Mongo.instance;
  }
}

export default new Mongo().getConnection();
