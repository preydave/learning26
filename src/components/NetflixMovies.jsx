import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovies = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixMovies</h1>
        <ul>
          <li>
            <Link to="/watch/border2">border2</Link>
            
          </li>
          <li>
            <Link to="/watch/breakingbad">war2</Link>
          </li>
          <li>
            <Link to="/watch/strangerthings">sita rama</Link>
          </li>
          
        </ul>
    </div>
  )
}