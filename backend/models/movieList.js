const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  media_type: {
    type: String,
  },
  title: {
    type: String,
  },
  first_air_date: {
    type: String,
  },
  original_language: {
    type: String,
  },
  overview: {
    type: String,
  },
  genre_ids: {
    type: Array,
  },
  vote_average:{
    type:Number
  },
  popularity:{
    type:Number
  }
});

module.exports = mongoose.model("Movie", movieSchema);
