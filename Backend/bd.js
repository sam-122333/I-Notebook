const mongoose = require("mongoose");

const connectToMongo = () => {
  mongoose.connect("mongodb://localhost:27017/inotebook", () => {
    console.log("connect to mongo successfully");
  });
};

module.exports = connectToMongo;
