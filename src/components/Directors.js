import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsListJSX = directors.map(
    (singleDirector, idx) => {
      return (
        <div key={idx}>
          <h4>Name: {singleDirector.name}</h4>
          <p>Movies:</p>
          <ul>
            {singleDirector.movies.map(
              (singleMovie, index) => {
                return <li key={index}>{singleMovie}</li>;
              }
            )}
          </ul>
        </div>
      );
    }
  );

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsListJSX}
    </div>
  );
}

export default Directors;
