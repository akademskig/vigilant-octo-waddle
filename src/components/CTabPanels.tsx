import React from 'react';
import styled from 'styled-components';

const CTabPanelS = styled.div`
padding-top: 1em;
`
export default function CTabPanels({ children, selectedIndex }: { children: any, selectedIndex: number }) {

    return (
        <CTabPanelS>
            {children.map((c: any, idx: number)=> idx === selectedIndex ? c: '')}
        </CTabPanelS>
    )
}