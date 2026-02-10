import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HeaderComponent } from './components/HeaderComponent';
import { FooterComponent } from './components/FooterComponent';
import ContentComponent from './components/ContentComponent';
import { MapDemo2 } from './components/MapDemo2.jsx';
import { MapDemo3 } from './components/MapDemo3.jsx';
import { MapDemo4 } from './components/MapDemo4.jsx';
import { MapDemo5 } from './components/MapDemo5.jsx';
import { MapDemo6 } from './components/MapDemo6.jsx';
import { MapDemo8 } from './components/MapDemo8.jsx';
import { NetflixHome } from './components/NetflixHome.jsx';
import { NetflixShows } from './components/NetflixShows.jsx';
import { NetflixMovies } from './components/NetflixMovies.jsx';
import { NetflixHelp } from './components/NetflixHelp.jsx';
import { Navbar } from './components/Navbar.jsx';
import { ErrorNotFound } from './components/ErrorNotFound.jsx';
import { Watch } from './components/Watch.jsx';
import IPLTeams from './components/ipl-teams/IplTeams.jsx';
import TeamDetails from "./components/ipl-teams/TeamDetails";
import { HomeComponent } from './components/HomeComponent.jsx';
import { UseStateDemo } from './components/UseStateDemo.jsx';
import { FunctionDemo1 } from './components/FunctionDemo1.jsx'; // ✅ ADD THIS
import { Employees } from './components/Employees.jsx';
import OnChange from './components/OnChange.jsx';
import EmployeeTable from './components/EmployeeTable.jsx';
import ProductTable from './components/ProductTable.jsx';
import StudentTable from './components/StudentTable.jsx';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/netflixhome" element={<NetflixHome />} />
        <Route path="/netflixshows" element={<NetflixShows />} />
        <Route path="/netflixmovies" element={<NetflixMovies />} />
        <Route path="/netflixhelp" element={<NetflixHelp />} />
        <Route path="/watch/:name" element={<Watch />} />

        <Route path="/ipl" element={<IPLTeams />} />
        <Route path="/players/:teamName" element={<TeamDetails />} />

        <Route path="/HomeComponent" element={<HomeComponent />} />
        <Route path="/FunctionDemo1" element={<FunctionDemo1 />} />
        <Route path="/UseStateDemo" element={<UseStateDemo />} />
        <Route path="/Employees" element={<Employees/>}></Route>
        <Route path='/OnChange' element={<OnChange/>}></Route>
        <Route path="/*" element={<ErrorNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
