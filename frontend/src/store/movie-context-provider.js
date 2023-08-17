import MovieContext from "./movie-context";

const MovieContextProvider = (props) => {
  const requests = {
    API_KEY: process.env.REACT_APP_API_KEY,
    fetchTrending: `${process.env.REACT_APP_SERVER}/api/movies/trending?token=${process.env.REACT_APP_USER_TOKEN}`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_network=123`,
    fetchTopRated: `${process.env.REACT_APP_SERVER}/api/movies/top-rate?token=${process.env.REACT_APP_USER_TOKEN}`,
    fetchActionMovies: `${process.env.REACT_APP_SERVER}/api/movies/discover?token=${process.env.REACT_APP_USER_TOKEN}&genre=28`,
    fetchComedyMovies: `${process.env.REACT_APP_SERVER}/api/movies/discover?token=${process.env.REACT_APP_USER_TOKEN}&genre=35`,
    fetchHorrorMovies: `${process.env.REACT_APP_SERVER}/api/movies/discover?token=${process.env.REACT_APP_USER_TOKEN}&genre=27`,
    fetchRomanceMovies: `${process.env.REACT_APP_SERVER}/api/movies/discover?token=${process.env.REACT_APP_USER_TOKEN}&genre=10749`,
    fetchDocumentaries: `${process.env.REACT_APP_SERVER}/api/movies/discover?token=${process.env.REACT_APP_USER_TOKEN}&genre=99`,
    fetchSearch: `${process.env.REACT_APP_SERVER}/api/movies/search?token=${process.env.REACT_APP_USER_TOKEN}`,
    fetchGenre: `${process.env.REACT_APP_SERVER}/api/movies/genre?token=${process.env.REACT_APP_USER_TOKEN}`,
  };

  return (
    <MovieContext.Provider value={requests}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
