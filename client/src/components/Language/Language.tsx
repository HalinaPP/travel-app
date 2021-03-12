import './styles.scss';
import React, { ChangeEvent, useContext, FC } from 'react';
import { LanguageProps } from './Language.model';
import { LANGS } from '../../constants/constants';
import { Context } from '../../utils/Context';

const Language: FC<LanguageProps> = ({ currLang, onSelectChange }) => {
  // const [context, setContext] = useContext(Context);
  // const {lang, setLang} = useContext<{string, (string)=>void}>(Context);
  // const setCurrLang = useContext(Context);
  // const currLangNew = lang;
  const getLangsItems = () => Object.keys(LANGS).map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>, setLang: (lang: string) => void) => {
    console.log(target.value);
   // onSelectChange(target.value);
    setLang(target.value);
  };

  return (
    <Context.Consumer>
      {({ lang, setLang }) => (
        <select value={lang} onChange={(event: ChangeEvent<HTMLSelectElement>) => handleChange(event, setLang)}>
          {getLangsItems()}
        </select>
      )}
    </Context.Consumer>
  );
};
export default Language;
