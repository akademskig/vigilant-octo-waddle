import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import CPasswordStrength from '../../../components/CPasswordStrength';

const CTextInputS = styled.div`
display: flex;
flex-direction: column;
align-items : flex-start;
max-width:90%;
margin: auto;
padding: 1em;
padding-top: 0;

input{
    margin-top: 0.3em;
    width: 100%;
    border-radius: 3px;
    border-color: transparent;
    padding: 0.5em;
    &.error{
        border-color: ${({theme})=> theme.colors.error};
        outline:  ${({theme})=> theme.colors.error};
    }
}
span.error{
    color: ${({theme})=> theme.colors.error}
}
`
export default function CTextIput({ code, name, fieldType, value, setValue, register, error, validations }: CTextInputParams) {

    function onValueChange(value: string){
        console.log(register)
        setValue(value)
    }
    return (
        <CTextInputS>
            <label htmlFor={code}>{name} { validations['required'] && <span >*</span>}</label>
            <input 
            className={error ? "error": ""}
            defaultValue={value}
            name={code} 
            id={code} 
            type={fieldType} 
            onChange={(e) => onValueChange(e.target.value)}
            ref={register}
            />
            {error && <span className="error">{error.message}</span>}
            {code==="password" && value &&  <CPasswordStrength password={value}></CPasswordStrength>}
        </CTextInputS>
    )
}

type CTextInputParams = {
    code: string,
    name: string,
    fieldType: string,
    value: string,
    setValue: Dispatch<SetStateAction<any>>,
    register: () => void,
    error: any,
    validations: any
}