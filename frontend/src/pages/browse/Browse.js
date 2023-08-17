import { Fragment } from "react";
import Banner from "../../components/Banner/Banner";
import MovieList from "../../components/MovieList/MovieList";
import classes from "./Browse.module.css";

function Browse() {
  return (
    <Fragment>
      <Banner />
      <div className="app">
        {/* <MovieList category="fetchNetflixOriginals" backdrop={false} /> */}
        <div className={classes.category}>
          <h2 className={classes.label}>Xu hướng</h2>
          <MovieList category="fetchTrending" backdrop={true} />
        </div>
        <div className={classes.category}>
          <h2 className={classes.label}>Xếp hạng cao</h2>
          <MovieList category="fetchTopRated" backdrop={true} />
        </div>
        <div className={classes.category}>
          <h2 className={classes.label}>Hành động</h2>
          <MovieList category="fetchActionMovies" backdrop={true} />
        </div>
        <div className={classes.category}>
          <h2 className={classes.label}>Hài</h2>
          <MovieList category="fetchComedyMovies" backdrop={true} />
        </div>
        <div className={classes.category}>
          <h2 className={classes.label}>Kinh dị</h2>
          <MovieList category="fetchHorrorMovies" backdrop={true} />
        </div>
        <div className={classes.category}>
          <h2 className={classes.label}>Lãng mạn</h2>
          <MovieList category="fetchRomanceMovies" backdrop={true} />
        </div>
        <div className={classes.category}>
          <h2 className={classes.label}>Tài liệu</h2>
          <MovieList category="fetchDocumentaries" backdrop={true} />
        </div>
      </div>
    </Fragment>
  );
}

export default Browse;
