import React from 'react'

export const MapDemo4 = () => {
    var cities = [
    { id: 1, name: "amdb", pop: 5000000, AQI: 102 },
    { id: 2, name: "dwarka", pop: 10000, AQI: 300 },
    { id: 3, name: "bet", pop: 850000, AQI: 200 },
    ]
  return (
    <div style={{textAlign: "center" }}>
        <h1>
           cities  </h1>
           <table className="table ">
            <thead>
                <tr>
                    <th> ID</th>
                    <th>NAME</th>
                    <th>POPULATION</th>
                    <th>AQI</th>
                   
                </tr>
            </thead>
          
        <tbody>
           {
                cities.map((city)=>{
                    return <tr>
                        <td>{city.id}</td>
                        <td>{city.name}</td>
                        <td>{city.pop}</td>
                        <td>{city.AQI}</td>
                    </tr>
                })
            }
        </tbody>
   
    </table>
   
    </div>

  )
}

