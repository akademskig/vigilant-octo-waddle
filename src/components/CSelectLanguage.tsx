import React, { useContext } from 'react';
import styled from 'styled-components';
import { TranslationContext } from '../translation/translation.context';

const CSelectS = styled.div`
    display: flex;
    align-items: center;
    select{
        background-color: ${({ theme }) => theme.colors.primary.medium};
        padding: 0.2em 0.4em;
        border-radius: 2px;
        color: white;
        margin-left: 0.8em;
        &:hover{
            cursor: pointer;
        }
        option{
            &:hover{
                cursor: pointer;
            }
        }
    }
    img{
        width: 1.6em;
        z-index: 1000;
    }

    &:hover{
        cursor: pointer;
    }
`
export function CSelectLanguage() {

    let { setTranslations, currentLocale, availableLocales } = useContext(TranslationContext)
   
    const selected = availableLocales.find((option: any) => option.value === currentLocale)
    return (
        <CSelectS>
            {selected && <img src={selected.img} alt="Country flag"/>}
            <select onChange={(e) => setTranslations(e.target.value)} defaultValue={selected && selected.value}>
                {availableLocales.map(({ value, name }: { value: string, name: string, img: string }, idx: number) =>
                    <option key={idx} value={value} >{name}</option>
                )
                }
            </select>
        </CSelectS>
    )
}

type CSelectProps = {
    options: { name: string, value: string, img: string }[],
    setTranslations: (locale: string) => void,
    currentLocale: string
}