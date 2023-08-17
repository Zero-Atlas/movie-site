import { useContext, useEffect, useRef, useState } from "react";
import MovieContext from "../../store/movie-context";
import { json } from "react-router-dom";
import classes from "./SearchForm.module.css";

const SearchForm = (props) => {
  const ctx = useContext(MovieContext);
  const [genreList, setGenreList] = useState([]);
  const [genre, setGenre] = useState("");
  const [type, setType] = useState("");
  const [lang, setLang] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    const getGenreList = async () => {
      const response = await fetch(ctx.fetchGenre);
      if (!response.ok) {
        throw json(response);
      }
      const data = await response.json();
      setGenreList(data);
    };
    getGenreList();
  }, [ctx.fetchGenre]);

  const inputRef = useRef();
  const resetHandler = (event) => {
    event.preventDefault();
    inputRef.current.value = "";
    props.onReset();
  };

  const genreChangeHandler = (event) => {
    setGenre(event.target.value);
  };
  const typeChangeHandler = (event) => {
    setType(event.target.value);
  };
  const langChangeHandler = (event) => {
    setLang(event.target.value);
  };
  const yearChangeHandler = (event) => {
    setYear(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const keyword=inputRef.current.value
    console.log([keyword,genre,type,lang,year]);
    if (keyword !== "") {
      props.onSearch(keyword, genre, type, lang, year);
    }
  };
  return (
    <form className={classes["search-form"]}>
      {/* keyword input */}
      <div className={classes["form-control"]}>
        <input type="text" id="search-input" ref={inputRef} />
        <label htmlFor="search-input">
          <svg
            className="svg-inline--fa fa-search fa-w-16"
            fill="#ccc"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </label>
      </div>
      {/* genre select */}
      <div className={classes["form-control"]}>
        <select name="genre" onChange={genreChangeHandler}>
          <option value="">Genre?</option>
          {genreList.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>
      </div>
      {/* movie type select */}
      <div className={classes["form-control"]}>
        <select name="type" onChange={typeChangeHandler}>
          <option value="">Movie type?</option>
          <option value="all">All</option>
          <option value="movie">Movie</option>
          <option value="tv">TV</option>
          <option value="person">Person</option>
        </select>
      </div>
      {/* movie language select */}
      <div className={classes["form-control"]}>
        <select name="type" onChange={langChangeHandler}>
          <option value="">Language?</option>
          <option value="en">English</option>
          <option value="ja">Japannese</option>
          <option value="ko">Korean</option>
        </select>
      </div>
      {/* movie year */}
      <div className={classes["form-control"]}>
        <input
          type="number"
          step="1"
          name="year"
          value={year}
          onChange={yearChangeHandler}
          placeholder="Year"
        />
      </div>
      {/* action */}
      <div className={classes.action}>
        <button className={classes.btn} onClick={resetHandler}>
          Reset
        </button>
        <button className={classes.btn} onClick={submitHandler}>
          Search
        </button>
      </div>
    </form>
  );
};
export default SearchForm;
