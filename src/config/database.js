require("dotenv").config();
const mongoose = require("mongoose");

const connectToDb = async () => {
  await mongoose.connect(process.env.CONNECTION_STRING);
};

module.exports = { connectToDb };
