import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovies = () => {
  var movies = [
    { movieId: 1, movieName: "border2" },
    { movieId: 2, movieName: "war2" },
    { movieId: 3, movieName: "sita rama" },
  ];

  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixMovies</h1>
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
  )
}
