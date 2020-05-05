import React from 'react';
import FRegistration from './components/forms/FRegistration';
import styled from 'styled-components';

const RegistrationPageS = styled.div`
justify-content: center;
height: 100vh;
align-items: center;
padding-top: 20vh;
box-sizing: border-box;
background-color: ${({theme}) => theme.colors.primary.dark};
`
function RegistrationPage(){

    return(
        <RegistrationPageS>
            <FRegistration></FRegistration>
        </RegistrationPageS>
    )
}

export default RegistrationPage