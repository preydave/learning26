import React from "react";
import { Link } from "react-router-dom";

export const NetflixShows = () => {
  
  var movies = [
    { movieId: 1, movieName: "Border2" },
    { movieId: 2, movieName: "sita-ramn" },
    { movieId: 3, movieName: "war2" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>NetflixShows</h1>
      {
        movies.map((movie)=>{
          //return <li>{movie.movieName}</li>
          return <li>
            {/* <Link to="/watch/{movie.movieName}">{movie.movieName}</Link> */}
            <Link to={`/watch/${movie.movieName}`}>{movie.movieName}</Link>
          </li>
        })
      }
    </div>
  );
};