import React from 'react'
import Form from './Form'

function Signin({register,errors}) {
  return (
    <>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>
        
      <input {...register("age")} />
      <p>{errors.age?.message}</p>

      <input {...register("lastName")} />
      <p>{errors.lastName?.message}</p>
      
      <input type="submit" />
    </>
  )
}
export default Form(Signin, {
  defaultValues: {
    firstName: '',
    lastName: 'fwfe'
  }
})