import React from 'react';
import styled from 'styled-components';

const CButtonS = styled.button`
padding: 0.6em 1em;
text-transform: uppercase;
background-color: transparent;
border: none;
border-top: 0.5px solid ${({ theme }) => theme.colors.secondary.light};
/* border-radius: 3px; */
color: ${({ theme }) => theme.colors.secondary.light};
width: 100%;
font-size: 1em;
font-weight: bold;
margin-top: 1em;
display: flex;
align-items: center;
justify-content: center;
img{
    width: 1.2em;
    &.right{
        margin-left: 1em;
    }
    &.left{
        margin-right: 1em;
    }
    &.active{
        display: none;
    }
    color: ${({ theme }) => theme.colors.secondary.light};
}
&:hover{
    cursor: pointer;
    color: ${({ theme }) => theme.colors.secondary.medium};
    opacity: 0.9;
    border-color: ${({ theme }) => theme.colors.secondary.light};
    img{
        display:none;
    }
    img.active{
        display:block;
    }
 
}
`
export default function CButton({ children, ...rest }: { children: any, type?: any, onClick?: any }) {

    return (
        <CButtonS {...rest}>{children}</CButtonS>
    )
}