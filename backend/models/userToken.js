const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: {
    type: String,
  },
  token: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);