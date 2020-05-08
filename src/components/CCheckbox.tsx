import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { TranslationContext } from '../translation/translation.context';

const CCheckboxS = styled.div`

max-width:90%;
margin: auto;
padding: 0 1em 1em 1em;
box-sizing: border-box;
line-height: 1.2em;
margin-top: 0.5em;

@media(max-width:800px){
    max-width: 95%;
}

.container {
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display:block;
  margin-bottom: 0.5em;
  min-width: 260px;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  left: 0;
  height: 1.2em;
  width: 1.2em;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: transparent;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 5px;
  width: 0.5em;
  top: 0;
  height: 1em;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

span.error{
    margin-top: 1em;
    color: ${({theme})=> theme.colors.error}
}
`
export function CCheckbox({ setValue, value, code, error, name, validations, register }: CCheckboxProps) {
    let { useTranslations } = useContext(TranslationContext)
    let tr = useTranslations()
    function onValueChange(value: string){
        if (value === "true")
            setValue(true)
        else {
            setValue(false)
        }
    }
    return (
        <CCheckboxS>
            <label className="container" htmlFor={code}>{tr.t(name)} {validations['required'] && <span >*</span>}
                <input ref={register}type="checkbox" id={code} name={code} onChange={(e) => onValueChange(e.target.value)} checked={value} value={(!value).toString()} />
                <span className="checkmark"></span>
            </label>
            {error && <span className="error">{tr.t(error.message)}</span>}
        </CCheckboxS>
    )
}

type CCheckboxProps = {
    setValue: (value: boolean)=> void,
    value: boolean,
    code: string,
    error: any,
    name: string,
    validations: any,
    register: any
}