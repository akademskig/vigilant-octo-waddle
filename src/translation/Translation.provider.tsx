import { Locales } from './types';
import Polyglot from 'node-polyglot';
import translations from './translations';
import React, { ReactElement, useState } from 'react';
import { TranslationContext } from './translation.context';
import croFlag from '../assets/cro.svg'
import ukFlag from '../assets/uk.svg'

export function TranslationProvider({ children }: { children: ReactElement | ReactElement[] }) {
    //@ts-ignore
    const defaultLocale: Locales = localStorage.getItem('current_locale') || Locales.EN
    let [currentLocale, setCurrentLocale] = useState(defaultLocale)
    const setTranslations = (locale: Locales) => {
        localStorage.setItem('current_locale', locale)
        setCurrentLocale(locale)
    }

    const useTranslations = () => {
        const tr = translations[currentLocale]
        const polyglot = new Polyglot({ locale: currentLocale })
        polyglot.extend(tr)
        return polyglot
    }

    const availableLocales = [
        {
            value: Locales.HR,
            name: useTranslations().t('Croatian'),
            img: croFlag
        },
        {
            value: Locales.EN,
            name: useTranslations().t('English'),
            img: ukFlag
        }
    ]

    return (
        <TranslationContext.Provider value={{ currentLocale, useTranslations, setTranslations, availableLocales }}>
            {children}
        </TranslationContext.Provider>
    )
}