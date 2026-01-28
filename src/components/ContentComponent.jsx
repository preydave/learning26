import React, { Component } from 'react'
import myImage from "../images/myimg.jpg";
import "../assets/css/content.css"


export default function ContentComponent() {
 var title="react js ";
      var isavailable=true;
    
      var student={
        name:"prey dave",
        age:"21",
        city:"dwarka",
        contact:"7202886821",
        address:"baucharaji street",
      };
     
    var year=2026;


  return (
    <div className="top-banner">

<p>
          Shri Krishna prem, karuna aur dharma ka sabse sundar roop hain।
          <br /><br />
          Unki bansuri ki madhur dhun har dil ko shant aur khush kar deti hai।
          <br /><br />
          Krishna humein jeevan me karm karna aur phal ki chinta chhodna sikhate hain।
          <br /><br />
          Wo mitra, margdarshak aur bhagwan — teeno roop me yaad kiye jaate hain।
          <br /><br />
          Krishna ka jeevan humein sachchai, prem aur buddhi se jeena sikhata hai।
        </p>
<h1>JAY DWARKADHISH</h1>
<img src={myImage} alt="A beautiful scenery" style={{ width: '30%', height: "auto" }} />
    <h2> Name: {student.name}</h2>
    <h2> Age: {student.age}</h2>
    <h2> City: {student.city}</h2>    
    <h2>Contact: {student.contact}</h2>
    <h2>Address: {student.address}</h2>
     <h2>year:{year}</h2>
     
     </div>
     

  )
}


