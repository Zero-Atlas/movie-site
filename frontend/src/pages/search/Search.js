import React, { Fragment, useContext, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import SearchResults from "../../components/SearchResults/SearchResults";
import MovieContext from "../../store/movie-context";

import classes from "./Search.module.css";
import { json } from "react-router-dom";

const Search = () => {
  const ctx = useContext(MovieContext);
  const [results, setResults] = useState(null);

  const onSearchHandler = async (keyword, genre, type, lang, year) => {
    let url = ctx.fetchSearch + "&q=" + keyword;
    if (genre) url = url + "&genre=" + genre;
    if (type) url = url + "&type=" + type;
    if (lang) url = url + "&lang=" + lang;
    if (year) url = url + "&year=" + year;

    const response = await fetch(url, {
      method: "POST",
    });
    const data = await response.json();
    if (!response.ok) {
      console.log(data.message);
      throw json({ message: data.message, status: response.status });
    }
    setResults(data.results);
  };
  const onReset = () => {
    setResults(null);
  };
  return (
    <Fragment>
      <main className={`app ${classes.app}`}>
        <SearchForm onSearch={onSearchHandler} onReset={onReset} />
        <SearchResults results={results} />
      </main>
    </Fragment>
  );
};

export default Search;
