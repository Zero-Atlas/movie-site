import { Fragment, useContext, useEffect, useState } from "react";
import classes from "./MovieList.module.css";
import { json } from "react-router-dom";
import MovieContext from "../../store/movie-context";
import { useHorizontalScroll } from "../../hooks/use-horizontal-scroll";
import MovieDatail from "../MovieDetail/MovieDetail";

const MovieList = (props) => {
  const ctx = useContext(MovieContext);
  const [listData, setListData] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [detailData, setdetailData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(ctx[props.category]);
      const data = await response.json();
      
      if (!response.ok) {
        console.log(data.message);
        throw json({ message: data.message, status: response.status });
      }

      setListData(data.results);
    };
    getData();
  }, [ctx, props]);

  const scrollRef = useHorizontalScroll();

  const onClickItemHandler = (movie) => {
    setShowDetail(true);
    setdetailData(movie);
  };
  const closeDetailHandler = () => {
    setShowDetail(false);
  };
  return (
    <Fragment>
      <ul
        className={`${classes["movie-list"]} ${
          props.backdrop ? classes.backdrop : ""
        }`}
        ref={scrollRef}
      >
        {listData.map((movie) => (
          <li
            key={movie.id}
            className={classes["movie-list-item"]}
            onClick={onClickItemHandler.bind(null, movie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${
                props.backdrop ? movie.backdrop_path : movie.poster_path
              }`}
              alt={movie.name}
            />
          </li>
        ))}
      </ul>
      {showDetail && (
        <MovieDatail movieData={detailData} onClose={closeDetailHandler} />
      )}
    </Fragment>
  );
};
export default MovieList;
