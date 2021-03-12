import React from 'react';

export const Context = React.createContext({ lang: 'ru', setLang: (lang:string) => {} });
