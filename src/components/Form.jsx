import { useForm, Controller } from "react-hook-form";
import Signin from "./Signin";
import React from 'react';


export default function Form(WrappedComponent , values) {
 

  return function WithForm(props) {
    const { register, handleSubmit, formState: { errors } } = useForm({
      defaultValues: values.defaultValues
    });
  
    const formMethods = useForm();
    const onSubmit = data => console.log(data);
    return    (<form onSubmit={handleSubmit(onSubmit)}> <WrappedComponent errors={errors} register={register} /></form>)
  };


}

