import React from 'react';
import FRegistration from './components/forms/FRegistration';
import styled from 'styled-components';
import monkeyImg from '../assets/monkey.svg'

const RegistrationPageS = styled.div`
justify-content: center;
height: 100vh;
align-items: center;
padding-top: 20vh;
box-sizing: border-box;
background-color: ${({ theme }) => theme.colors.primary.dark};
background-image: url(${monkeyImg});
background-repeat: no-repeat;
background-position-x: -30px;
`
function RegistrationPage() {

    return (
        <RegistrationPageS>
            <FRegistration></FRegistration>
        </RegistrationPageS>
    )
}

export default RegistrationPage