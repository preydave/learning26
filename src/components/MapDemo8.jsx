import React from 'react'
import prey from '../images/prey.jpeg'


export const MapDemo8 = () => {

  var My = [
    { id: 1,name: "Prey", image: prey}
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>my profile</h1>
        

      <table className='table' border="4" align='center'>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>IMAGE</th>
          </tr>
        </thead>

        <tbody>
          {
            My.map((hs) => (
              <tr key={hs.id}>
                <td>{hs.id}</td>
                <td>{hs.name}</td>
                <td>
                  <img src={hs.image} alt="patient" width="80" />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
