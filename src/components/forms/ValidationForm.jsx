import React from "react";
import { useForm } from "react-hook-form";

export const ValidationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
    alert("Form Submitted Successfully");
  };

  return (
    <div style={{ textAlign:"center" }}>
      <h2>Validation Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Name */}
        <label>Name</label><br />
        <input
          type="text"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Minimum 3 characters",
            },
          })}
        />
        <p style={{ color: "red" }}>{errors.name?.message}</p>

        <br />

        {/* Email */}
        <label>Email</label><br />
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid Email",
            },
          })}
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>

        <br />

        {/* Phone */}
        <label>Phone</label><br />
        <input
          type="text"
          {...register("phone", {
            required: "Phone is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Enter 10 digit number",
            },
          })}
        />
        <p style={{ color: "red" }}>{errors.phone?.message}</p>

        <br />

        {/* Password */}
        <label>Password</label><br />
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            validate: {
              hasCapital: (v) =>
                /[A-Z]/.test(v) || "1 Capital required",
              hasSmall: (v) =>
                /[a-z]/.test(v) || "1 Small required",
              hasDigit: (v) =>
                /[0-9]/.test(v) || "1 Digit required",
              hasSpecial: (v) =>
                /[!@#$%^&*]/.test(v) ||
                "1 Special required",
              minLength: (v) =>
                v.length >= 8 || "Min 8 characters",
            },
          })}
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>

        <br />

        {/* Confirm Password */}
        <label>Confirm Password</label><br />
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
        />
        <p style={{ color: "red" }}>
          {errors.confirmPassword?.message}
        </p>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
