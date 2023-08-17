import MovieContext from "./movie-context";

const MovieContextProvider = (props) => {
  const API_KEY = "fa320b9ea6049b91b73a4edc73528ecf";
  const userToken='8qlOkxz4wq'
  const requests = {
    API_KEY: API_KEY,
    fetchTrending: `http://localhost:5000/api/movies/trending?token=${userToken}`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=123`,
    fetchTopRated: `http://localhost:5000/api/movies/top-rate?token=${userToken}`,
    fetchActionMovies: `http://localhost:5000/api/movies/discover?token=${userToken}&genre=28`,
    fetchComedyMovies: `http://localhost:5000/api/movies/discover?token=${userToken}&genre=35`,
    fetchHorrorMovies: `http://localhost:5000/api/movies/discover?token=${userToken}&genre=27`,
    fetchRomanceMovies: `http://localhost:5000/api/movies/discover?token=${userToken}&genre=10749`,
    fetchDocumentaries: `http://localhost:5000/api/movies/discover?token=${userToken}&genre=99`,
    fetchSearch: `http://localhost:5000/api/movies/search?token=${userToken}`,
    fetchGenre: `http://localhost:5000/api/movies/genre?token=${userToken}`,
  };

  return (
    <MovieContext.Provider value={requests}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
