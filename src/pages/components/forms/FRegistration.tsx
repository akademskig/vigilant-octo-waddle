import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import CTabs, {CTab} from '../../../components/CTabs';
import CTabPanels from '../../../components/CTabPanels';
import styled from 'styled-components';

const FRegistrationS = styled.div`
    max-width: 400px;
    width: 90%;
    margin: auto;
    color: white;
    /* background-color: ${({theme}) => theme.colors.primary.light}; */
    border: 1px solid ${({theme}) => theme.colors.secondary.light};
    border-radius: 3px;
`
function FRegistration(){

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data: any) => console.log(data);
    const [tabSelected, setTabSelected] = useState(0)
    console.log(tabSelected)
    return(
        <FRegistrationS>
        <form onSubmit={handleSubmit(onSubmit)}>
            <CTabs {...{selectTab: setTabSelected, selectedTab: tabSelected}}>
                <CTab label="Step1"></CTab>
                <CTab label="Step2"></CTab>
            </CTabs>
            <CTabPanels selectedIndex={tabSelected}>
                <p>panel1</p>
                <p>panel2</p>
            </CTabPanels>

        </form>
        </FRegistrationS>
    )
}

export default FRegistration