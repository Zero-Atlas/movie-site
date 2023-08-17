import classes from "./SearchResults.module.css";
import { useState } from "react";
import MovieDatail from "../MovieDetail/MovieDetail";

const SearchResults = (props) => {
  const [showDetail, setShowDetail] = useState(false);
  const [detailData, setdetailData] = useState({});
  const onClickItemHandler = (movie) => {
    setShowDetail(true);
    setdetailData(movie);
  };
  const closeDetailHandler = () => {
    setShowDetail(false);
  };
  return (
    <div className={classes["search-results"]}>
      <h2>Search Results</h2>
      {showDetail && (
        <MovieDatail movieData={detailData} onClose={closeDetailHandler} />
      )}
      <div className={classes.movies}>
        {props.results &&
          props.results.map((movie) => (
            <div
              key={movie.id}
              className={classes.movie}
              onClick={onClickItemHandler.bind(null, movie)}
            >
              <img
                alt={movie.name}
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
export default SearchResults;
