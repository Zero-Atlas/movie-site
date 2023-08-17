import { useContext, useEffect, useState } from "react";
import { json } from "react-router-dom";
import classes from "./Banner.module.css";
import MovieContext from "../../store/movie-context";

const Banner = () => {
  const [bannerData, setBannerData] = useState(null);
  const ctx = useContext(MovieContext);
  useEffect(() => {
    const fetchData = async (url) => {
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        console.log(data.message);
        throw json({ message: data.message, status: response.status });
      }
      const randomBanner =
        data.results[Math.floor(Math.random() * data.results.length - 1)];
      setBannerData(randomBanner);
    };
    fetchData(ctx.fetchTrending);
  }, [ctx]);

  return (
    <section className={classes.banner}>
      <div className={classes["bg-img"]}>
        <img
          src={
            bannerData &&
            `https://image.tmdb.org/t/p/original/${bannerData.backdrop_path}`
          }
          alt="movie's backdrop"
        />
      </div>
      <div className={classes["text-box"]}>
        <div className={classes.name}>{bannerData && bannerData.name}</div>
        <div className={classes.actions}>
          <button>Play</button>
          <button>My List</button>
        </div>
        <div className={classes.desc}>{bannerData && bannerData.overview}</div>
      </div>
    </section>
  );
};
export default Banner;
