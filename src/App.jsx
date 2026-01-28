import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HeaderComponent } from './components/HeaderComponent';
import { FooterComponent } from './components/FooterComponent';
import ContentComponent from './components/ContentComponent';
//import './App.css'

function App() {
  
  

  return (
    <>
    <h1>
    <HeaderComponent></HeaderComponent></h1>
    

      <ContentComponent></ContentComponent>
    
    <FooterComponent></FooterComponent>
    </>


  );
}

export default App
