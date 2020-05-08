import React from 'react';
import styled from 'styled-components';

const CSelectS = styled.div`
display: flex;
align-items: center;
select{
background-color: ${({ theme }) => theme.colors.primary.medium};
padding: 0.2em 0.4em;
border-radius: 2px;
color: white;
margin-left: 0.4em;

}
img{
    width: 1.6em;
    z-index: 1000;
}

&:hover{
    cursor: pointer;
}
`
export function CSelectLanguage({ options, setTranslations, currentLocale }: CSelectProps) {
    const selectedIndex = options.findIndex((option: any) => option.value === currentLocale)
    const selected = options.find((option: any) => option.value === currentLocale)
    return (
        <CSelectS>
            {selected && <img src={selected.img} alt="Country flag" />}
            <select onChange={(e) => setTranslations(e.target.value)}>
                {options.map(({ value, name, img }: { value: string, name: string, img: string }, idx: number) =>
                    <option key={idx} value={value} selected={idx === selectedIndex}>{name}</option>
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