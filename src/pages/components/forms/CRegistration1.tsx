import React from 'react';
import { useForm } from "react-hook-form";
import CTextIput from './CTextInput';
import CButton from '../../../components/CButton';
import styled from 'styled-components';
import leftIcon from "../../../assets/leftIcon.svg";
import leftIconActive from "../../../assets/leftIconActive.svg";
import rightIcon from "../../../assets/rightIcon.svg";
import rightIconActive from "../../../assets/rightIconActive.svg";
import checkIcon from "../../../assets/checkIcon.svg";
import checkIconActive from "../../../assets/checkIconActive.svg";

const FRegistrationS = styled.form`
    .btn-group{
        display: flex;
    }
`
function CRegistration1({ fields, next, back, submit }: { fields: any, next?: () => void, back?: () => void, submit?: () => void }) {
    const { register, handleSubmit, errors } = useForm();
    function onSubmit(data: any) {
        if (submit) {
            submit()
        }
        if (next) {
            next()
        }

    }
    function onNext() {
        handleSubmit(onSubmit)
    }

    return (
        <FRegistrationS noValidate onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field: any) =>
                <CTextIput
                    key={field.code}
                    error={errors[field.code]}
                    register={register(field.validations)}
                    {...field} />)}
            {next &&
                <CButton onClick={() => onNext()} >
                    Next
                <img src={rightIcon} className="right" />
                    <img src={rightIconActive} className="active right" />
                </CButton>}
            {!next &&
                <div className="btn-group">
                    <CButton onClick={back}>
                        <img src={leftIcon} className="left" />
                        <img src={leftIconActive}
                            className="active left" />
                        Back
                        </CButton>
                    <CButton type="submit"  >
                        Submit
                        <img src={checkIcon} className="right" />
                        <img src={checkIconActive}
                            className="active right" />
                    </CButton>
                </div>}
        </FRegistrationS>
    )
}

export default CRegistration1