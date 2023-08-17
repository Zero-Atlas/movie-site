import MovieContext from "./movie-context";

const MovieContextProvider = (props) => {
  const requests = {
    API_KEY: API_KEY,
    fetchTrending: `${process.env.server}/api/movies/trending?token=${process.env.userToken}`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&with_network=123`,
    fetchTopRated: `${process.env.server}/api/movies/top-rate?token=${process.env.userToken}`,
    fetchActionMovies: `${process.env.server}/api/movies/discover?token=${process.env.userToken}&genre=28`,
    fetchComedyMovies: `${process.env.server}/api/movies/discover?token=${process.env.userToken}&genre=35`,
    fetchHorrorMovies: `${process.env.server}/api/movies/discover?token=${process.env.userToken}&genre=27`,
    fetchRomanceMovies: `${process.env.server}/api/movies/discover?token=${process.env.userToken}&genre=10749`,
    fetchDocumentaries: `${process.env.server}/api/movies/discover?token=${process.env.userToken}&genre=99`,
    fetchSearch: `${process.env.server}/api/movies/search?token=${process.env.userToken}`,
    fetchGenre: `${process.env.server}/api/movies/genre?token=${process.env.userToken}`,
  };

  return (
    <MovieContext.Provider value={requests}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
