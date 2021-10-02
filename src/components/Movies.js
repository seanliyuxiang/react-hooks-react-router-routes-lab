import React from "react";
import { movies } from "../data";

function Movies() {

  const moviesListJSX = movies.map(
    (singleMovie, idx) => {
      return (
        <div key={idx}>
          <h4>Name: {singleMovie.title}</h4>
          <p>Time: {singleMovie.time}</p>
          <p>Genres:</p>
          <ul>
            {singleMovie.genres.map(
              (singleGenre, index) => {
                return <li key={index}>{singleGenre}</li>;
              }
            )}
          </ul>
        </div>
      );
    }
  );

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesListJSX}
    </div>
  );
}

export default Movies;
