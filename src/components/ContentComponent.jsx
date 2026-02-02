import React, { Component } from 'react'
import myImage from "../images/myimg.jpg";
import "../assets/css/content.css"


export default function ContentComponent() {



  return (
    <div className="top-banner"  style={{textAlign:"center",display:'flex'}}>

<p> 
    <h1>JAY DWARKADHISH</h1>
         <span style={{display:'block'}}> Shri Krishna prem, karuna aur dharma ka sabse sundar roop hain।
          </span> 
         <span> Unki bansuri ki madhur dhun har dil ko shant aur khush kar deti hai। </span>
        
         <span> Krishna humein jeevan me karm karna aur phal ki chinta chhodna sikhate hain। </span>
          
          <span>Wo mitra, margdarshak aur bhagwan — teeno roop me yaad kiye jaate hain। </span>
          
          <span>Krishna ka jeevan humein sachchai, prem aur buddhi se jeena sikhata hai। </span>
        </p>

<img src={myImage} alt="A beautiful scenery" style={{ width: '30%', height: "auto", display:'flex'}} />
    
     </div>
     

  )
}


