import { createContext } from "react";

const MovieContext = createContext({
  fetchTrending: [],
  fetchNetflixOriginals: [],
  fetchTopRated: [],
  fetchActionMovies: [],
  fetchComedyMovies: [],
  fetchHorrorMovies: [],
  fetchRomanceMovies: [],
  fetchDocumentaries: [],
  fetchSearch: [],
  fetchGenre: [],
});

export default MovieContext;
