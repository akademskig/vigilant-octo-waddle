import { Locales } from './types';
import Polyglot from 'node-polyglot';
import translations from './data';
import React, { cloneElement, ReactElement, useState } from 'react';
import { TranslationContext } from './translation.context';

export function TranslationProvider({ children }: { children: ReactElement | ReactElement[] }) {
    const defaultLocale = Locales.EN
    let [currentLocale, setCurrentLocale] = useState(defaultLocale)
    const setTranslations = (locale: Locales) => {
        setCurrentLocale(locale)
    }

    const useTranslations = () => {
        const tr = translations[currentLocale]
        const polyglot = new Polyglot({ locale: currentLocale })
        polyglot.extend(tr)
        return polyglot
    }

    return (
        <TranslationContext.Provider value={{currentLocale, useTranslations, setTranslations}}>
                 {!Array.isArray(children) && <TranslationContext.Consumer>{(context)=> cloneElement(children, {...context})}</TranslationContext.Consumer>}
        </TranslationContext.Provider>
    )
}