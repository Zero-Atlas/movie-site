const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const videoSchema = new Schema({
  id: {
    type: Number,
  },
  videos: {
    type: Array,
  },
});

module.exports = mongoose.model("Video", videoSchema);