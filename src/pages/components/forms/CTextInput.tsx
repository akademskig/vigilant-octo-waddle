import React, { Dispatch, SetStateAction, useContext } from 'react';
import styled from 'styled-components';
import CPasswordStrength from '../../../components/CPasswordStrength';
import Polyglot from 'node-polyglot';
import { TranslationContext } from '../../../translation/translation.context';

const CTextInputS = styled.div`
display: flex;
flex-direction: column;
align-items : flex-start;
max-width:90%;
margin: auto;
padding: 0 1em 1em 1em;

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
    let { useTranslations } = useContext(TranslationContext)
    let tr = useTranslations()
    function onValueChange(value: string){
        setValue(value)
    }
    return (
        <CTextInputS>
            <label htmlFor={code}>{tr.t(name)} { validations['required'] && <span >*</span>}</label>
            <input 
            className={error ? "error": ""}
            defaultValue={value}
            name={code} 
            id={code} 
            type={fieldType} 
            onChange={(e) => onValueChange(e.target.value)}
            ref={register}
            />
            {error && <span className="error">{tr.t(error.message)}</span>}
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
    validations: any,
    useTranslations: ()=> Polyglot
}