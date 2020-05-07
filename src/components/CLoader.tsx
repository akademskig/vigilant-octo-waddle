import React from 'react';
import styled, { keyframes } from 'styled-components';
import banana from '../assets/banana.svg'

const CLoaderA = keyframes`

0%{
    transform: rotate(0)
}
100%{
    transform: rotate(360deg)
}
`

const CLoaderS = styled.div`
.loader{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgba(0,0,0,0.5);

    .banana-image{
        width: 4em;
        animation: ${CLoaderA} 1s linear infinite;
    }
}
`
export default function CLoader({loading}: {loading:boolean}) {

    return (
        <CLoaderS>
        {loading && <div className="loader">
                <img className={`banana-image`}src={banana}></img>
            </div>}
        </CLoaderS>
    )
}