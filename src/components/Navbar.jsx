import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">NETFLIX</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/netflixhome">Netflix Home</Link>
              
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/netflixshows">Netflix Shows</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/netflixmovies">Movies</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/netflixhelp">Help</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/ipl">IPL</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/FunctionDemo1">
                funnction1
              </Link>
            </li>


            <li className="nav-item">
              <Link className="nav-link" to="/usestatedemo">
                usestatedemo
              </Link>
            </li>

             <li className="nav-item">
              <Link className="nav-link" to="/employees">
              Employee
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/OnChange">
              OnChange
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  )
}
