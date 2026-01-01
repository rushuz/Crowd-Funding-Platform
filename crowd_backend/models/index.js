const mongoose = require("mongoose");
require("dotenv").config();

const dbUrl = process.env.MONGODB_URI;

mongoose
  .connect(dbUrl)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

module.exports = {
  Campaign: require("./Campaign"),
  Donation: require("./Donation"),
  User: require("./User"),
  Token: require("./Token"),
  Query: require("./Query"),
};
