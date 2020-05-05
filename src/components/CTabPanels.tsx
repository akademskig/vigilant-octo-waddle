import React from 'react';

export default function CTabPanels({ children, selectedIndex }: { children: any, selectedIndex: number }) {

    return (
        <div>
            {children.map((c: any, idx: number)=> idx === selectedIndex ? c: '')}
        </div>
    )
}