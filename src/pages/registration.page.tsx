import React from 'react';
import FRegistration from './components/forms/FRegistration';
import styled from 'styled-components';
import monkeyImg from '../assets/monkey.svg'
import monkeyFormImg from '../assets/monkeyForm.svg'

const RegistrationPageS = styled.div`
justify-content: center;
height: 100vh;
align-items: center;
padding-top: 5vh;
box-sizing: border-box;
background-color: ${({ theme }) => theme.colors.primary.dark};
background-image: url(${monkeyImg});
background-repeat: no-repeat;
background-position-x: -30px;
.monkey-img{
    width: 8em;
}
`
function RegistrationPage() {

    return (
        <RegistrationPageS>
            <img className="monkey-img"src={monkeyFormImg}></img>
            <FRegistration></FRegistration>
        </RegistrationPageS>
    )
}

export default RegistrationPage