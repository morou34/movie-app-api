import React, { useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./Components/MovieCard";

const API_URL = "https://www.omdbapi.com?apikey=3454d0ab";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="search for a movie ..."
          value={searchedMovie}
          onChange={(e) => {
            setSearchedMovie(e.target.value);
          }}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchedMovie);
          }}
        />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found !</h2>
        </div>
      )}
      ;
    </div>
  );
}

export default App;

// Here is your key: 3454d0ab
