import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HeaderComponent } from './components/HeaderComponent';
import { FooterComponent } from './components/FooterComponent';
import ContentComponent from './components/ContentComponent';
import { MapDemo2 } from './components/MapDemo2.jsx';
import { MapDemo4 } from './components/MapDemo4.jsx';
import { MapDemo3 } from './components/MapDemo3.jsx';
import { MapDemo5 } from './components/MapDemo5.jsx';
import { MapDemo6 } from './components/MapDemo6.jsx';
import { Route,Routes } from 'react-router-dom';
import { NetflixHome } from './components/NetflixHome.jsx';
import { NetflixShows } from './components/NetflixShows.jsx';
import { NetflixMovies } from './components/NetflixMovies.jsx';
import { Navbar } from './components/Navbar.jsx';
import { MapDemo8 } from './components/MapDemo8.jsx';
import { ErrorNotFound } from './components/ErrorNotFound.jsx';
import { Watch } from './components/Watch.jsx';
import { NetflixHelp } from './components/NetflixHelp.jsx';
import TeamDetails from "./components/ipl-teams/TeamDetails";


//import './App.css'



function App() {
  
  

  return (
    <div>

      <Navbar></Navbar>
    <Routes>
       <Route path="/netflixhome" element={<NetflixHome />}></Route>
      <Route path="/netflixshows" element={<NetflixShows/>}></Route>
       <Route path="/netflixmovies" element={<NetflixMovies/>}></Route> 
       <Route path="/netflixhelp" element={<NetflixHelp/>}></Route>
        <Route path="/watch/:name" element = {<Watch/>}></Route> 
       <Route path="/ipl" element={<IPLTeams />} />
      <Route path='/*' element={<ErrorNotFound/>}></Route>
      <Route path="/players/:teamName" element={<TeamDetails />} />

    </Routes>
 
    </div>


  );
}
import IPLTeams from './components/ipl-teams/IplTeams.jsx';

export default App
