import React from 'react'
import { useForm } from 'react-hook-form'

export const FormStudent = () => {
    const{register,handleSubmit,formState:{errors}}=useForm()
    //errors -->{}
    console.log("errors...",errors) //{}

    const validationSchema = {

        ageValidator:{
            required:{
                value:true,
                message:"Age is Required*"
            },
            min:{
                value:18,
                message:"Age should be at least 18*"
            },
            max:{
                value:60,
                message:"Age should be at most 60*"
            }
        },
        contactValidator:{
            required:{
                value:true,
                message:"Contact number is required*"
            },
            pattern:{
                value:/^\d{10}$/,
                message:"Contact number must be exactly 10 digits*"
            }
        }


    }




    const submitHandler = (data)=>{
        alert("form submitted...")
        console.log(data)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Blood Donation</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME:</label>
                <input type='text' {...register("name",{required:{value:true,message:"Name is required*"}})}></input>
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label>AGE</label>
                <input type='number' {...register("age",validationSchema.ageValidator)}></input>
                {errors.age && <p>{errors.age.message}</p>}
            </div>
            <div>
                <label>BLOOD GROUP</label> <br />
                A+: <input type='radio' value="A+" {...register("bloodGroup",{required:{value:true,message:"Blood group is required*"}})}></input>
                A-: <input type='radio' value="A-" {...register("bloodGroup",{required:{value:true,message:"Blood group is required*"}})}></input>
                B+: <input type='radio' value="B+" {...register("bloodGroup",{required:{value:true,message:"Blood group is required*"}})}></input>
                B-: <input type='radio' value="B-" {...register("bloodGroup",{required:{value:true,message:"Blood group is required*"}})}></input>
                AB+: <input type='radio' value="AB+" {...register("bloodGroup",{required:{value:true,message:"Blood group is required*"}})}></input>
                AB-: <input type='radio' value="AB-" {...register("bloodGroup",{required:{value:true,message:"Blood group is required*"}})}></input>
                O+: <input type='radio' value="O+" {...register("bloodGroup",{required:{value:true,message:"Blood group is required*"}})}></input>
                O-: <input type='radio' value="O-" {...register("bloodGroup",{required:{value:true,message:"Blood group is required*"}})}></input>
                {errors.bloodGroup && <p>{errors.bloodGroup.message}</p>}
            </div>
            <div>
                <label>CONTACT NO</label>
                <input type='text' {...register("contact",validationSchema.contactValidator)}></input>
                {errors.contact && <p>{errors.contact.message}</p>}
            </div>
            <div>
                <input type='submit'></input>
            </div>

        </form>

    </div>
  )
}
