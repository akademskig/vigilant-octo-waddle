import React from 'react';
import { CSelectLanguage } from './CSelectLanguage';
import { Locales } from '../translation/types';
import styled from 'styled-components';
import croFlag from '../assets/cro.svg'
import ukFlag from '../assets/uk.svg'
const ToolbarS = styled.header`
padding: 0.8em;
display: flex;
justify-content: flex-end;
box-shadow: 5px 5px 5px black;
background-color: ${({ theme }) => theme.colors.primary.dark};
margin-bottom: 1em;
`
export function Toolbar(props: any) {
    const locales = [{
        value: Locales.HR,
        name: Locales.HR,
        img: croFlag
    },
    {
        value: Locales.EN,
        name: Locales.EN,
        img: ukFlag
    }
    ]
    return (
        <ToolbarS>
            <CSelectLanguage options={locales} selected={0}  {...props}></CSelectLanguage>
        </ToolbarS>
    )
}