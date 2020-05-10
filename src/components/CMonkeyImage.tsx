import React, { useContext } from 'react';
import monkeyFormImg from '../assets/monkeyForm.svg'
import styled from 'styled-components';
import chatImg from '../assets/speechbubble.png'
import { TranslationContext } from '../translation/translation.context';

const MonkeyImageS = styled.div`
    display: flex;
    margin-top: 2em;
    justify-content: center;
    margin-left: 15%;
    align-items: flex-start;
    .monkey-img{
        width: 8em;
        display: block;
    }
    .speech-bubble{
        position: relative;
        margin-top: -1em;
        img{
        width: 150px;
        position: relative;
            @media(max-width:800px){
                width:130px;
            }
        }
        span{
            position:absolute;
            top:19px;
            left: 16px;
            max-width: 120px;
            font-size: 0.80em;
            font-weight: bold;
            text-transform: uppercase;
            text-align: center;
            word-wrap: break-word;
            color: lightgrey;
            font-family: 'Bangers', cursive;
            @media(max-width:800px){
                top: 17px;
                left: 16px;
                max-width:100px;
            }
        }
    }
`
export function CMonkeyImage() {
    let { useTranslations } = useContext(TranslationContext)
    let tr = useTranslations()
    return (
        <MonkeyImageS>
            <img className="monkey-img" src={monkeyFormImg} alt="Monkey"></img>
            <div className="speech-bubble"> <img src={chatImg} alt="Speech bubble"></img><span>{tr.t("Please register!")}</span></div>
        </MonkeyImageS>
    )
}