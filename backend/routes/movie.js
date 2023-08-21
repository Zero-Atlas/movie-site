const express = require("express");

const movieController = require("../controllers/movie");

const router = express.Router();

router.get("/api/movies/trending", movieController.getTrending);

router.get("/api/movies/top-rate", movieController.getTopRate);

router.get("/api/movies/discover", movieController.getGenre);

router.get("/api/movies/video", movieController.postVideo);

router.get("/api/movies/search", movieController.postSearch);

router.get("/api/movies/genre", movieController.getGenreList);

// wrong endpoint
router.use("/", (req, res, next) => {
  res.status(404).send(JSON.stringify({ message: "Route not found!" }));
});

module.exports = router;
