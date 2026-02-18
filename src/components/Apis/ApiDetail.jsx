import axios from 'axios'
import React, { useState } from 'react'

const ApiDetail = () => {

    const [movies, setMovies] = useState([])
    const [searchParam, setSearchParam] = useState("Iron Man")
    const [selectedMovie, setSelectedMovie] = useState(null)

    // 🔍 Search Movies
    const searchMovie = async () => {
        const res = await axios.get(`https://www.omdbapi.com/?apikey=9d57be0b&s=${searchParam}`)
        setMovies(res.data.Search || [])
        setSelectedMovie(null)
    }

    // 🎬 Get Details
    const getMovieDetails = async (id) => {
        const res = await axios.get(`https://www.omdbapi.com/?apikey=9d57be0b&i=${id}`)
        setSelectedMovie(res.data)
    }

    return (
        <div style={{ textAlign: "center" }}>

            <h1>🎬 OMDB SEARCH</h1>

            <input
                type="text"
                value={searchParam}
                onChange={(e) => setSearchParam(e.target.value)}
                placeholder="Enter movie name"
            />

            <button onClick={searchMovie}>SEARCH</button>

            {/* 🎬 GRID VIEW */}
            {
                !selectedMovie && (
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "20px",
                        marginTop: "20px"
                    }}>
                        {
                            movies.map((movie) => {
                                return (
                                    <div key={movie.imdbID}
                                        style={{
                                            border: "1px solid black",
                                            padding: "10px"
                                        }}>
                                        <img src={movie.Poster} style={{ width: "80%" }} />
                                        <h3>{movie.Title}</h3>
                                        <p>{movie.Year}</p>

                                        <button onClick={() => getMovieDetails(movie.imdbID)}>
                                            View Details
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }

            {/*  DETAIL VIEW */}
            {
                selectedMovie && (
                    <div style={{ marginTop: "20px" }}>

                        <button onClick={() => setSelectedMovie(null)}>
                            ⬅ Back
                        </button>

                        <h1>{selectedMovie.Title}</h1>

                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "20px",
                            marginTop: "20px"
                        }}>

                            <img src={selectedMovie.Poster} height="300" />

                            <div style={{ textAlign: "left", maxWidth: "400px" }}>
                                <p><b>Year:</b> {selectedMovie.Year}</p>
                                <p><b>Genre:</b> {selectedMovie.Genre}</p>
                                <p><b>Director:</b> {selectedMovie.Director}</p>
                                <p><b>Actors:</b> {selectedMovie.Actors}</p>
                                <p><b>Plot:</b> {selectedMovie.Plot}</p>
                                <p><b>IMDB Rating:</b> ⭐ {selectedMovie.imdbRating}</p>
                            </div>

                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default ApiDetail
