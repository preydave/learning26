import React, { useEffect, useState } from "react";

function Apidemo() {
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  const callApi = async () => {
    try {
      const res = await fetch("https://node5.onrender.com/user/user/");
      const response = await res.json();

      console.log("response:", response);

      setMessage(response.message);
      setData(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
     <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>{message}</h2>
      
      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{ margin: "0 auto", textAlign: "center" }}
      >  
        <thead>
          <tr>
            <th>No</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Apidemo;




 
 
 
 
 
 
 //using await function

  /*async function Apidemo() {
  try {
    const response = await fetch("https://node5.onrender.com/user/user/");
    
    console.log(response); // 👈 first ye Promise resolve hone ke baad response object

    const data = await response.json();

    console.log("API Data:", data); // 👈 final output
  } catch (error) {
    console.log("Error:", error);
  }

  return null;
}

export default Apidemo;
*/ 
 
 
 
 
 // colsole output pending
 /*function Apidemo() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://node5.onrender.com/user/user/")
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    }, 5000);
  });

  console.log(promise);

  promise.then(data => console.log(data));

  return null;
}

export default Apidemo;*/ 
