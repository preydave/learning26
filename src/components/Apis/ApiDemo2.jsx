import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo2 = () => {

    const [movies, setmovies] = useState([])
    const [searchParam, setsearchParam] = useState("Iron Man")

    const searchMovie = async () => {
        const res = await axios.get(`https://www.omdbapi.com/?apikey=9d57be0b&s=${searchParam}`)
        console.log(res)
        console.log(res.data)

        setmovies(res.data.Search || [])
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>OMDB SEARCH</h1>

            <input 
                type="text" 
                value={searchParam} 
                onChange={(e) => setsearchParam(e.target.value)} 
                placeholder="Enter movie name"
            />

            <button onClick={searchMovie}>SEARCH</button>

            <table border="1" style={{ margin: "20px auto" }}>
                <thead>
                    <tr>
                        <th>IMDB ID</th>
                        <th>TITLE</th>
                        <th>YEAR</th>
                        <th>POSTER</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        movies.map((movie, index) => {
                            return (
                                <tr key={index}>
                                    <td>{movie.imdbID}</td>
                                    <td>{movie.Title}</td>
                                    <td>{movie.Year}</td>
                                    <td>
                                        <img src={movie.Poster} height="150" width="150" />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ApiDemo2
