import React, { useEffect, useState } from "react";
import axios from "axios";

const Apicall = () => {
  const [data, setData] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/comments");

      // Console outputs
      console.log("response =>", response);
      console.log("response.data =>", response.data);
      console.log("response.data.message =>", response.data.message); // undefined
      console.log("response.data.data =>", response.data.data); // undefined

      // Actual data
      console.log("comments =>", response.data.comments);

      // Set state
      setData(response.data.comments);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Comments Table</h2>

      <table
        border="1"
        cellPadding="10"
        style={{
          margin: "auto",
          borderCollapse: "collapse",
          width: "90%",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Body</th>
            <th>Post ID</th>
            <th>User ID</th>
            <th>Username</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.body}</td>
              <td>{item.postId}</td>
              <td>{item.user.id}</td>
              <td>{item.user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Apicall;
