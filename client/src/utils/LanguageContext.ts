import React from 'react';

export const LanguageContext = React.createContext({ lang: 'ru', setLang: (lang: string) => {} });
