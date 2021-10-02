import React from "react";
import { actors } from "../data";

function Actors() {

  const actorsListJSX = actors.map(
    (singleActor, idx) => {
      return (
        <div key={idx}>
          <h4>Name: {singleActor.name}</h4>
          <p>Movies:</p>
          <ul>
            {singleActor.movies.map(
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
      <h1>Actors Page</h1>
      {actorsListJSX}
    </div>
  );
}

export default Actors;
