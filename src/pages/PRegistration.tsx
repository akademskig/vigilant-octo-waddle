import React from 'react';
import FRegistration from './components/forms/FRegistration';
import styled from 'styled-components';
import monkeyImg from '../assets/monkey.svg'
import { Toolbar } from '../components/CToolbar';
import { CMonkeyImage } from '../components/CMonkeyImage';

const RegistrationPageS = styled.div`
    justify-content: center;
    min-height: 100vh;
    align-items: center;
    padding-bottom: 5vh;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.primary.dark};
    background-image: url(${monkeyImg});
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: bottom;
    background-size: 250px;
`
function RegistrationPage(props: any) {
    return (
        <RegistrationPageS>
            <Toolbar {...props} />
            <CMonkeyImage></CMonkeyImage>
            <FRegistration {...props}></FRegistration>
        </RegistrationPageS>
    )
}

export default RegistrationPage