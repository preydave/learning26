import React from 'react'

export const MapDemo = () => {

    var cars=["marc","audi","suzuki","RR"]
  return (
    <div>  
        <h1>cars</h1>
        {
            cars.map((c)=>{
                return<h1>{c}</h1>
            })
        }


    </div>
  )
}
