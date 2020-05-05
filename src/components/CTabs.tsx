import React, { Dispatch, SetStateAction, cloneElement } from 'react';
import styled from 'styled-components';

const CTabsS = styled.div<{ active?: boolean }>`
    display: flex;
    button {
        &.active{
            color: ${({ theme }) => theme.colors.secondary.light} ;
        }
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        width: 100%;
        padding: 1em;
        &:focus{
            border: none;
            outline: none;
        }
    };
    width: 100%;
    justify-content: space-evenly;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.light};
    box-sizing: border-box;
`

const CTabS = styled.span<{ active?: boolean }>`
    text-align: center;
    background-color: ${({ theme, active }) => active ? theme.colors.secondary.light : 'transparent'} 

    button {
       background-color: ${({ theme, active }) => active ? theme.colors.secondary.light : 'transparent'} ;
      border: none;
    };
`
export default function CTabs({ children, selectTab, selectedTab }: { children: any, selectedTab: number, selectTab: Dispatch<SetStateAction<number>> }) {

    return (
        <CTabsS>
            {children.map((c: any, idx: number) =>
                cloneElement(<button>{c}</button>, { className: idx === selectedTab ? "active" : '', key: idx, onClick: () => selectTab(idx) }))}
        </CTabsS>
    )
}

export function CTab({ label }: { label: string }) {
    return (
        <CTabS>
            {label}
        </CTabS>
    )
}