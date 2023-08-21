const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const videoSchema = new Schema({
  id: {
    type: Number,
  },
  videos: [{
    site:{type:String},
    type:{type:String},
    published_at:{type:String},
    official:{type:Boolean}
  }],
});

module.exports = mongoose.model("Video", videoSchema);