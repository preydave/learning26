import React from 'react';
import { useForm } from 'react-hook-form';

export const Journalist = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const validationSchema = {
    ageValidator: {
      required: {
        value: true,
        message: "Age is Required*"
      },
      min: {
        value: 20,
        message: "Age should be at least 20*"
      },
      max: {
        value: 70,
        message: "Age should be at most 70*"
      }
    },
    emailValidator: {
      required: {
        value: true,
        message: "Email is required*"
      },
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Invalid email format*"
      }
    },
    experienceValidator: {
      max: {
        value: 50,
        message: "Experience should be at most 50 years*"
      }
    }
  };

  const submitHandler = (data) => {
    alert("Journalist form submitted...");
    console.log(data);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Journalist Details</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME:</label>
          <input type='text' {...register("name", { required: { value: true, message: "Name is required*" } })} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label>NEWS CHANNEL:</label>
          <input type='text' {...register("newsChannel", { required: { value: true, message: "News Channel is required*" } })} />
          {errors.newsChannel && <p>{errors.newsChannel.message}</p>}
        </div>
        <div>
          <label>AGE:</label>
          <input type='number' {...register("age", validationSchema.ageValidator)} />
          {errors.age && <p>{errors.age.message}</p>}
        </div>
        <div>
          <label>CONTACT:</label>
          <input type='text' {...register("contact")} />
        </div>
        <div>
          <label>EMAIL:</label>
          <input type='email' {...register("email", validationSchema.emailValidator)} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>EXPERIENCE (years):</label>
          <input type='number' {...register("experience", validationSchema.experienceValidator)} />
          {errors.experience && <p>{errors.experience.message}</p>}
        </div>
        <div>
          <input type='submit' />
        </div>
      </form>
    </div>
  );
};
