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
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", justifyItems: "center" }}>
        {
          movies.map((movie)=>{
            return (
              <div key={movie.movieId} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px", width: "200px" }}>
                <Link to={`/watch/${movie.movieName}`} style={{ textDecoration: "none", color: "black" }}>
                  {movie.movieName}
                </Link>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};