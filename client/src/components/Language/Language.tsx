import './styles.scss';
import React, { ChangeEvent, FC } from 'react';
import { LANGS } from '../../constants/constants';
import { Context } from '../../utils/Context';

const Language: FC = () => {
  const getLangsItems = () => Object.keys(LANGS).map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>, setLang: (lang: string) => void) => {
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
