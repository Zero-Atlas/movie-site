const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  media_type: {
    type: String,
  },
  genre_ids: {
    type: Array,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
