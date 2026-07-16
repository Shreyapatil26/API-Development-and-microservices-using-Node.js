const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sp_904586_db:sp2628@cluster0.5gwkvkk.mongodb.net/?appName=Cluster0"
    );
    console.log("mongodb is connected successfully !");
  } catch (error) {
    console.error("Mongodb connection failed", error);
    process.exit(1);
  }
};

module.exports = connectToDB;