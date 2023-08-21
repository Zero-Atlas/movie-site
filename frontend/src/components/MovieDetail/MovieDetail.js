import { useContext, useEffect, useState } from "react";
import MovieContext from "../../store/movie-context";
import classes from "./MovieDetail.module.css";
const MovieDatail = (props) => {
  const ctx = useContext(MovieContext);
  const [key, setKey] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getTrailerList = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER}/api/movies/video?token=${process.env.REACT_APP_USER_TOKEN}&film_id=${props.movieData.id}`
      );
      const data = await response.json();

      console.log(response);
      console.log(data);

      if (!response.ok) {
        setKey("");
        setMessage(data.message);
      } else {
        setKey(data.key);
      }
    };

    getTrailerList()
      .catch((err) => {
        console.log(err);
      });
  }, [ctx, props]);

  const onCloseHandler = () => {
    props.onClose();
  };
  return (
    <div className={classes["movie-detail"]}>
      <div className={classes.closes}>
        <button onClick={onCloseHandler}>X</button>{" "}
      </div>
      <div className={classes.textbox}>
        <h1 className={classes.title}>{props.movieData.original_title}</h1>
        <p className={classes.release}>
          Release Date: {props.movieData.release_date}
        </p>
        <p className={classes.voted}>
          Voted: {props.movieData.vote_average} / 10
        </p>
        <p className={classes.overview}>{props.movieData.overview}</p>
      </div>
      <div className={classes.trailer}>
        {key !== "" ? (
          <iframe
            title={props.movieData.name}
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${key}`}
          ></iframe>
        ) : (
          <h3>{message}</h3>
        )}
      </div>
    </div>
  );
};
export default MovieDatail;
