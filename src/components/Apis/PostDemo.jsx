import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const PostDemo = () => {

  const { register, handleSubmit, reset } = useForm();

  // ✅ Submit Handler
  const submitHandler = async (data) => {
    try {
      console.log("Form Data:", data);

      const res = await axios.post(
        "https://dummyjson.com/users/add",
        data
      );

      console.log("API Response:", res.data);

      alert("Data Submitted Successfully ✅");

      reset(); // form clear

    } catch (error) {
      console.log("Error:", error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit(submitHandler)}>

        {/* Name */}
        <div>
          <label>Enter Name</label><br />
          <input type="text" {...register("name")} />
        </div>

        <br />

        {/* Email */}
        <div>
          <label>Enter Email</label><br />
          <input type="email" {...register("email")} />
        </div>

        <br />

        {/* Age */}
        <div>
          <label>Enter Age</label><br />
          <input type="number" {...register("age")} />
        </div>

        <br />

        {/* Active */}
        <div>
          <label>Is Active</label><br />
          <select {...register("isActive")}>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <br />

        {/* Password */}
        <div>
          <label>Enter Password</label><br />
          <input type="password" {...register("password")} />
        </div>

        <br />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
};

export default PostDemo;
