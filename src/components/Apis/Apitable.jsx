import React, { useEffect, useState } from "react";
import axios from "axios";

const Apitable = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");

      // Console outputs
      console.log("response =>", response);
      console.log("response.data =>", response.data);
      console.log("response.data.message =>", response.data.message); // undefined
      console.log("response.data.data =>", response.data.data); // undefined

      // Actual data
      console.log("products =>", response.data.products);

      // Set data
      setData(response.data.products);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Product Table</h2>

      <table
        border="1"
        cellPadding="10"
        style={{
          margin: "auto",
          borderCollapse: "collapse",
          width: "80%",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Rating</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>{item.brand}</td>
              <td>{item.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Apitable;
