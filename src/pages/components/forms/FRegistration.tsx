import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import CTabs, { CTab } from '../../../components/CTabs';
import CTabPanels from '../../../components/CTabPanels';
import styled from 'styled-components';
import CRegistration1 from './CRegistration1';

const FRegistrationS = styled.div`
    max-width: 400px;
    width: 90%;
    margin: auto;
    color: white;
    /* background-color: ${({ theme }) => theme.colors.primary.light}; */
    border: 1px solid ${({ theme }) => theme.colors.secondary.light};
    border-radius: 3px;
`
function FRegistration() {
    const [tabSelected, setTabSelected] = useState(0)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const form1 = {
        'fname': {
            value: firstName,
            setValue: setFirstName,
            validations: {
                required: {
                    value: true,
                    message: 'First name is required'
                },
            }
        }, 'lname': {
            value: lastName,
            setValue: setLastName,
            validations: {
                required: {
                    value: true,
                    message: 'Last name is required'
                },
            }
        }, 'username': {
            value: username,
            setValue: setUsername,
            validations: {
                required: {
                    value: true,
                    message: 'Username name is required'
                },
            }
        }
    }
    console.log(form1)
    const form2 = {
        'email': {
            value: email,
            setValue: setEmail,
            validations: {
                required: {
                    value: true,
                    message: 'Email is required'
                },
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email"
                }
            }
        }, 'password': {
            value: password,
            setValue: setPassword,
            validations: {
                required: {
                    value: true,
                    message: 'Password is required'
                },
                minLength: {
                    value: 8,
                    message: "Password not strong enough!"
                }
            }
        }, 'password_confirm': {
            value: repeatPassword,
            setValue: setRepeatPassword,
            validations: {
                required: {
                    value: true,
                    message: 'You have to confirm password'
                },
                validate: {
                    confirm: (value: string) => value === password || "Passwords do not match!"
                }
            }
        }
    }
    return (
        <FRegistrationS>
            <div>
                <CTabs {...{ selectTab: setTabSelected, selectedTab: tabSelected }}>
                    <CTab label="Contact Information"></CTab>
                    <CTab label="Set password"></CTab>
                </CTabs>
                <CTabPanels selectedIndex={tabSelected}>
                    <CRegistration1 fields={form1} next={() => setTabSelected(1)} />
                    <CRegistration1 fields={form2} />
                </CTabPanels>
            </div>
        </FRegistrationS>
    )
}

export default FRegistration