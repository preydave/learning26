import React from 'react'

export const MapDemo5 = () => {
    var students =[
        {id:1,name:"prey",age:23,marks:78,city:"ahmedabad",gender:"male"},
        {id:2,name:"harvi",age:25,marks:81,city:"ahmedabad",gender:"female"},
        {id:3,name:"prutha",age:22,marks:72,city:"ahmedabad",gender:"female"},
    ]
   return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 3</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>MARKS</th>
                    <th>CITY</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((st)=>{
                        return <tr style={{backgroundColor:st.gender =="female" && "pink"}}>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td style={{color: st.age>24 ? "red" :"black"}}>{st.age}</td>
                          
                            <td>{st.marks}</td>
                            <td>{st.city}</td>
                            <td>{st.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}