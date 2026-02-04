import React from 'react'

export const MapDemo6 = () => {
    var employees =[
        {id:1,name:"Shyam",age:21,salary:50000,city:"Junagadh",work:"Manager"},
        {id:2,name:"Jayesh",age:25,salary:40000,city:"Ahmedabad",work:"Manager"},
        {id:3,name:"Prey",age:23,salary:25000,city:"Dwarka",work:"Devloper"},
        {id:4,name:"Jaimin",age:24,salary:30000,city:"Botad",work:"Devloper"},
        {id:5,name:"Shubh",age:22,salary:22000,city:"Dhoraji",work:"Devloper"},
        {id:6,name:"Devdip",age:21,salary:20000,city:"Upleta",work:"Devloper"},

    ]

  return (
   <div style={{textAlign:"center"}}>
        <h1>Employee Details</h1>
          <table className='table' border="2" align='center'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>SALARY</th>
                    <th>CITY</th>
                    <th>WORK</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((em)=>{
                        return <tr style={{backgroundColor:em.work =="Manager" && "pink"}}>
                            <td>{em.id}</td>
                            <td>{em.name}</td>
                           <td style={{color: em.age>24 ? "red" :"black"}}>{em.age}</td>
                            <td style={{backgroundColor:em.salary>30000 && "green"}}>{em.salary}</td>
                            <td style={{backgroundColor:em.city =="Upleta" && "gray"}}>{em.city}</td>
                            <td>{em.work}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>

  )
}






