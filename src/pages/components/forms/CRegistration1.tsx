import React, { Dispatch, SetStateAction } from 'react';
import { useForm } from "react-hook-form";
import { formFields } from '../../../data/index';
import CTextIput from './CTextInput';

function CRegistration1({ fields, next, submit }: { fields: any, next?: () => void, submit?: () => void }) {
    const { register, handleSubmit, watch, errors } = useForm();
    function onSubmit(data: any) {
        if (next) {
            next()
        }

    }
    function onNext() {
        handleSubmit(onSubmit)
    }

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
            {formFields.map(ff => Object.keys(fields).includes(ff.code) &&
                <CTextIput
                    key={ff.code}
                    error={errors[ff.code]}
                    register={register(fields[ff.code].validations)}
                    {...fields[ff.code]}
                    {...ff} />)}
            {next && <button onClick={() => onNext()} >Next</button>}
            {!next && <button type="submit" > Submit</button>}
        </form>
    )
}

export default CRegistration1