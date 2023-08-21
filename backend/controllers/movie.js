const MovieList = require("../models/movieList");
const GenreList = require("../models/genreList");
const VideoList = require("../models/videoList");
const paging = require("../utils/paging");

exports.getTrending = (req, res, next) => {
  const page = req.query.page || 1;
  MovieList.find().then((movieList) => {
    // get trending movie
    const trendingMovies = movieList
      .filter((m) => m.popularity >= 1000)
      .sort((a, b) => b.popularity - a.popularity);

    const respons = {
      results: paging(trendingMovies, page, 20),
      page: page,
      total_pages: Math.ceil(trendingMovies.length / 20),
    };

    res.send(JSON.stringify(respons));
  });
};

exports.getTopRate = (req, res, next) => {
  const page = req.query.page || 1;
  MovieList.find().then((movieList) => {
    // get top-rate movie
    const topRateMovies = movieList
      .filter((m) => m.vote_average >= 5)
      .sort((a, b) => b.vote_average - a.vote_average);

    const respons = {
      results: paging(topRateMovies, page, 20),
      page: page,
      total_pages: Math.ceil(topRateMovies.length / 20),
    };

    res.send(JSON.stringify(respons));
  });
};

exports.getGenre = (req, res, next) => {
  const page = req.query.page || 1;
  const genre = Number(req.query.genre);

  if (!genre) {
    return res
      .status(400)
      .send(JSON.stringify({ message: "Not found gerne parram" }));
  }

  MovieList.find().then((movieList) => {
    GenreList.find().then((genreList) => {
      // get genre by param
      const genreInfo = genreList.find((g) => g.id === genre);
      if (!genreInfo) {
        return res
          .status(400)
          .send(JSON.stringify({ message: "Not found that gerne id" }));
      }

      // filter movies
      const moviesByGenre = movieList.filter((m) =>
        m.genre_ids.includes(genreInfo.id)
      );

      const respons = {
        results: paging(moviesByGenre, page, 20),
        page: page,
        total_pages: Math.ceil(moviesByGenre.length / 20),
        genre_name: genreInfo.name,
      };

      res.send(JSON.stringify(respons));
    });
  });
};

exports.postVideo = (req, res, next) => {
  const movieId = Number(req.query.film_id);
  if (!movieId) {
    return res
      .status(400)
      .send(JSON.stringify({ message: "Not found that film_id parram" }));
  }

  VideoList.find().then((list) => {
    const videos = list.filter((item) => item.id === movieId)[0];
    if (!videos) {
      return res
        .status(404)
        .send(JSON.stringify({ message: "Not found video id" }));
    }

    // search video by official, site, type
    let updatedList = videos.videos.filter(
      (v) =>
        v.official &&
        v.site === "YouTube" &&
        (v.type === "Trailer" || v.type === "Teaser")
    );
    // check has valid video
    if (updatedList.length < 1) {
      return res
        .status(404)
        .send(JSON.stringify({ message: "Not found video" }));
    }

    // Trailer has more priority
    const hasTrailer = updatedList.filter((v) => v.type === "Trailer");
    if (hasTrailer) {
      updatedList = hasTrailer;
    }

    //sort video by published_at
    updatedList = updatedList.sort(
      (a, b) => new Date(a.published_at) - new Date(b.published_at)
    );
    return res.status(200).send(JSON.stringify(updatedList[0]));
  });
};

exports.getGenreList = (req, res, next) => {
  GenreList.find().then((list) => {
    res.send(JSON.stringify(list));
  });
};

exports.postSearch = (req, res, next) => {
  const page = req.query.page || 1;
  const q = req.query.q;
  const genre = Number(req.query.genre);
  const type = req.query.type;
  const lang = req.query.lang;
  const year = Number(req.query.year);
  if (!q) {
    return res.status(400).send({ message: "Not found keyword parram" });
  }
  const lowerCaseParrams = q.toLowerCase();
  MovieList.find().then((movieList) => {
    // get search results movie
    let searchResults = movieList.filter((m) => {
      const overview = m.overview,
        title = m.title;
      if (title) {
        return (
          overview.toLowerCase().includes(lowerCaseParrams) ||
          title.toLowerCase().includes(lowerCaseParrams)
        );
      } else return overview.toLowerCase().includes(lowerCaseParrams);
    });

    // search by genre
    if (genre) {
      searchResults = searchResults.filter((m) => m.genre_ids.includes(genre));
    }
    // search by type
    if (type) {
      searchResults = searchResults.filter((m) => m.media_type === type);
    }
    // search by language
    if (lang) {
      searchResults = searchResults.filter((m) => m.original_language === lang);
    }
    // search by year
    if (year) {
      searchResults = searchResults.filter(
        (m) => parseInt(m.first_air_date) === year
      );
    }

    const respons = {
      results: paging(searchResults, page, 20),
      page: page,
      total_pages: Math.ceil(searchResults.length / 20),
    };

    res.send(JSON.stringify(respons));
  });
};
