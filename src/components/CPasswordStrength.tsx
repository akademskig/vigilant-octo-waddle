import React from 'react';
import { strongRegex, mediumRegex } from '../data/index';
import styled from 'styled-components';


const CPasswordStrengthS = styled.div`
width: 100%;
background-color: transparent;
width: 100%;
height: 1.1em;
margin-top: 0.5em;

position: relative;
.ps-text{
    text-align: center;
    width: 100%;
    left:0;
    line-height: 1em;
    position: absolute;
    text-transform: capitalize;
    top:0;
}
div{
    border-radius: 2px;
    height: 100%;
    font-size: 1em;
    &.none{
        width: 1%;
        background-color: red;
    }
    &.weak{
        width: 33%;
        background-color: red;
    }
    &.medium{
        width: 66%;
        background-color: orange;
    }
    &.strong{
        width: 100%;
        background-color: green;
    }
    transition: width 0.5s;
}
`
export default function CPasswordStrength({ password }: { password: string }) {
    function analyze(password: string) {
        if (strongRegex.test(password)) {
            return "strong"
        }
        else if (mediumRegex.test(password)) {
            return "medium"
        }
        else if (password.length >= 8) {
            return "weak"
        }
        else {
            return "none"
        }
    }
    return (
        <CPasswordStrengthS>
            <span className="ps-text">{analyze(password)}</span>
            <div className={analyze(password)}> </div>
        </CPasswordStrengthS>
    )
}