import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import CTextIput from './CTextInput';
import CButton from '../../../components/CButton';
import styled from 'styled-components';
import leftIcon from "../../../assets/leftIcon.svg";
import leftIconActive from "../../../assets/leftIconActive.svg";
import rightIcon from "../../../assets/rightIcon.svg";
import rightIconActive from "../../../assets/rightIconActive.svg";
import checkIcon from "../../../assets/checkIcon.svg";
import checkIconActive from "../../../assets/checkIconActive.svg";
import { TranslationContext } from '../../../translation/translation.context';

const FRegistrationS = styled.form`
    .btn-group{
        display: flex;
    }
`
function CRegistration1({ fields, next, back, submit }: { fields: any, next?: () => void, back?: () => void, submit?: () => void }) {
    const { register, handleSubmit, errors } = useForm();
    let { useTranslations } = useContext(TranslationContext)
    let tr = useTranslations()
    function onSubmit(data: any) {
        if (submit) {
            submit()
        }
        if (next) {
            next()
        }

    }
    function onNext() {
        handleSubmit(onSubmit)
    }

    return (
        <FRegistrationS noValidate onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field: any) =>
                <CTextIput
                    key={field.code}
                    error={errors[field.code]}
                    register={register(field.validations)}
                    {...field} />)}
            {next &&
                <CButton onClick={() => onNext()} >
                    {tr.t('next')}
                    <img src={rightIcon} className="right" alt="Arrow right"/>
                    <img src={rightIconActive} className="active right" alt="Arrow right active" />
                </CButton>}
            {!next &&
                <div className="btn-group">
                    <CButton onClick={back}>
                        <img src={leftIcon} className="left" alt="Arrow left"/>
                        <img src={leftIconActive}
                            className="active left" alt="Arrow left active"/>
                        {tr.t('back')}
                        </CButton>
                    <CButton type="submit">
                        {tr.t('submit')}
                        <img src={checkIcon} className="right" alt="Arrow right"/>
                        <img src={checkIconActive}
                            alt="Arrow right active"
                            className="active right" />
                    </CButton>
                </div>}
        </FRegistrationS>
    )
}

export default CRegistration1