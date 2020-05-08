import React, { useState } from 'react';
import CTabs, { CTab } from '../../../components/CTabs';
import CTabPanels from '../../../components/CTabPanels';
import styled from 'styled-components';
import CRegistration1 from './CRegistration1';
import CLoader from '../../../components/CLoader';
import { registerUser } from '../../../api/index';
import { form } from "../../../data";
import { NotificationManager, NotificationContainer } from 'react-notifications';

const FRegistrationS = styled.div`
    max-width: 400px;
    width: 96%;
    margin: auto;
    color: white;
    background-color: ${({ theme }) => theme.colors.primary.dark}F2;
    border: 1px solid ${({ theme }) => theme.colors.secondary.light};
    border-radius: 3px;
`
function FRegistration({ useTranslations }: any) {
    const [tabSelected, setTabSelected] = useState(0)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [accept, setAccept] = useState(false)
    const [loading, setLoading] = useState(false)

    const tr = useTranslations()
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
            case ('accept'): {
                formField['value'] = accept
                formField['setValue'] = setAccept
                form2.push(formField)
                break
            }
        }
    })
    async function onSubmit() {
        const form = [...form1, ...form2]
        setLoading(true)
        registerUser(form)
            .then(res => {
                NotificationManager.success('Registration successful!')
            })
            .catch(({ info }) => {
                NotificationManager.error(info.error, 'Registration failed!', 3000)
            })
            .finally(() => setLoading(false))
    }
    return (
        <FRegistrationS>
            <div>
                <CTabs {...{ selectTab: setTabSelected, selectedTab: tabSelected }}>
                    <CTab label={tr.t("step 1")}></CTab>
                    <CTab label={tr.t("step 2")}></CTab>
                </CTabs>
                <CTabPanels {...useTranslations} selectedIndex={tabSelected}>
                    <CRegistration1 fields={form1} next={() => setTabSelected(1)} />
                    <CRegistration1 fields={form2} back={() => setTabSelected(0)} submit={onSubmit} />
                </CTabPanels>
            </div>
            <CLoader loading={loading}></CLoader>
            <NotificationContainer />
        </FRegistrationS>
    )
}

export default FRegistration