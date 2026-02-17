import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "all" })

    const [showMsg, setShowMsg] = useState(false)

    const submitHandler = (data) => {
        console.log(data)

        setShowMsg(true)

        setTimeout(() => {
            setShowMsg(false)
        }, 1000)
    }

    const validationSchema = {
        nameValidator: {
            required: {
                value: true,
                message: "Name is Required*"
            }
        },

        contactValidator: {
            required: {
                value: true,
                message: "Contact is required*"
            },
            pattern: {
                value: /^[6-9]{1}[0-9]{9}$/, // mobile validation
                message: "Invalid contact."
            }
        },

        promoCodeValidator: {
            required: {
                value: true,
                message: "Promocode is required*"
            },
            validate: (params) => {
                return params === "2026" || "Invalid promocode*"
            }
        },

        hobbiesValidator: {
            required: {
                value: true,
                message: "Hobbies are required*"
            },
            validate: (params) => {
                return params?.length >= 2 || "Min 2 hobbies are required*"
            }
        }
    }

    return (
        <div style={{ textAlign: "center" }}>

            {/* Popup Message */}
            {showMsg && (
                <div style={{
                    position: "fixed",
                    top: "20px",
                    right: "20px",
                    backgroundColor: "green",
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px"
                }}>
                    Form Submitted Successfully!
                </div>
            )}

            <form onSubmit={handleSubmit(submitHandler)}>

                <div>
                    <label>NAME:</label>
                    <input
                        type='text'
                        {...register("name", validationSchema.nameValidator)}
                    />
                    <p style={{ color: "red" }}>{errors.name?.message}</p>
                </div>

                <div>
                    <label>Contact:</label>
                    <input
                        type='text'
                        {...register("contact", validationSchema.contactValidator)}
                    />
                    <p style={{ color: "red" }}>{errors.contact?.message}</p>
                </div>

                <div>
                    <label>PROMO CODE:</label>
                    <input
                        type='text'
                        {...register("promocode", validationSchema.promoCodeValidator)}
                    />
                    <p style={{ color: "red" }}>{errors.promocode?.message}</p>
                </div>

                <div>
                    <label>HOBBIES:</label><br />

                    Cricket:
                    <input
                        type='checkbox'
                        value="cricket"
                        {...register("hobbies", validationSchema.hobbiesValidator)}
                    />

                    Travel:
                    <input
                        type='checkbox'
                        value="travel"
                        {...register("hobbies", validationSchema.hobbiesValidator)}
                    />

                    Scrolling:
                    <input
                        type='checkbox'
                        value="scrolling"
                        {...register("hobbies", validationSchema.hobbiesValidator)}
                    />

                    <p style={{ color: "red" }}>{errors.hobbies?.message}</p>
                </div>

                <div>
                    <input type='submit' value="Submit" />
                </div>

            </form>
        </div>
    )
} 