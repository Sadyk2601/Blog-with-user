const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE).then(() => {
      console.log("Mongoose Db connected!");
    });
  } catch (error) {
    console.log("Mongoose Db connection error: ", error);
  }
};

module.exports = connectDb;
