import React, { useState } from 'react';
import CTabs, { CTab } from '../../../components/CTabs';
import CTabPanels from '../../../components/CTabPanels';
import styled from 'styled-components';
import CRegistration1 from './CRegistration1';
import CLoader from '../../../components/CLoader';
import { registerUser } from '../../../api/index';
import { form } from "../../../data";
const FRegistrationS = styled.div`
    max-width: 400px;
    width: 96%;
    margin: auto;
    color: white;
    background-color: ${({ theme }) => theme.colors.primary.dark}F2;
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
    const [loading, setLoading] = useState(false)
    let form1: any[] = []
    let form2: any[] = []
    form.forEach(field => {
        let formField: any = field
        switch (field.code) {
            case ('fname'): {
                formField['value'] = firstName
                formField['setValue'] = setFirstName
                form1.push(formField)
                break
            }
            case ('lname'): {
                formField['value'] = lastName
                formField['setValue'] = setLastName
                form1.push(formField)
                break
            }
            case ('username'): {
                formField['value'] = username
                formField['setValue'] = setUsername
                form1.push(formField)
                break
            }
            case ('email'): {
                formField['value'] = email
                formField['setValue'] = setEmail
                form2.push(formField)
                break
            }
            case ('password'): {
                formField['value'] = password
                formField['setValue'] = setPassword
                form2.push(formField)
                break
            }
            case ('repeat_password'): {
                formField['value'] = repeatPassword
                formField['setValue'] = setRepeatPassword
                formField.validations.validate.confirm = (value: string) => value === password || "Passwords do not match!"
                form2.push(formField)
                break
            }
        }
    })

    async function onSubmit() {
        const form1Data = form1.map(({ code, value, dataType }: { code: string, value: string, dataType: string }) => ({
            code: code,
            valueStr: value,
            dataType: dataType
        }))
        const form2Data = form2.map(({ code, value, dataType }: { code: string, value: string, dataType: string }) => ({
            code: code,
            valueStr: value,
            dataType: dataType
        }))
        const data = { fields: [...form1Data, ...form2Data] }
        setLoading(true)
        registerUser(data)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
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
                    <CRegistration1 fields={form2} back={() => setTabSelected(0)} submit={onSubmit} />
                </CTabPanels>
            </div>
            <CLoader loading={loading}></CLoader>
        </FRegistrationS>
    )
}

export default FRegistration