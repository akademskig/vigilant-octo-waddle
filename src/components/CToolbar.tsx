import React from 'react';
import { CSelectLanguage } from './CSelectLanguage';
import styled from 'styled-components';

const ToolbarS = styled.header`
padding: 0.8em;
display: flex;
justify-content: flex-end;
box-shadow: 0 3px 5px black;
background-color: ${({ theme }) => theme.colors.primary.dark};
margin-bottom: 1em;
`
export function Toolbar() {
  
    return (
        <ToolbarS>
            <CSelectLanguage ></CSelectLanguage>
        </ToolbarS>
    )
}