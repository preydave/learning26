import React from 'react'

export const FunctionDemo1 = () => {
  
    const test=()=>{
        alert("test function called")
    }
    const test2=(x)=>{
        alert("value of x"+x)
    }
    return (
    <div style={{textAlign:"center"}}>
        <h1>helloooooo</h1>
        <button onClick={test}> click </button>
        <button onClick={()=>{test2(100)}}>CLICK 2</button>
    </div>
  )
}
