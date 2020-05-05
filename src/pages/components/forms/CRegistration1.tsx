import React from 'react';
import { useForm } from "react-hook-form";

function RegistrationForm(){

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>

        </form>
    )
}

export default RegistrationForm