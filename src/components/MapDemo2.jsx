import React from 'react'

export const MapDemo2 = () => {
var Users=[
    {id:1,Name:"abc",Pass:505,age:20},
    {id:2,Name:"mln",Pass:505,age:21},
    {id:3,Name:"xyz",Pass:50,age:22}
]
  return (
     <div>
        <h1>MAP DEMO 2</h1>
        {
            Users.map((user)=>{
                return <li>{user.id} -{user.Name} {user.Pass} -{user.age}</li>
            })
        }
    </div>
  )
}

