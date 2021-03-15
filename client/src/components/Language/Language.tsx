import './language.scss';
import React, { ChangeEvent, FC } from 'react';
import { LANGS } from '../../constants/constants';
import { LanguageContext } from '../../utils/LanguageContext';

const Language: FC = () => {
  const getLangsItems = () =>
    Object.keys(LANGS).map(item => (
      <option key={item} value={item}>
        {item}
      </option>
    ));

  const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>, setLang: (lang: string) => void) => {
    setLang(target.value);
  };

  return (
    <LanguageContext.Consumer>
      {({ lang, setLang }) => (
        <div className="custom-select">
          <select
            value={lang}
            onChange={(event: ChangeEvent<HTMLSelectElement>) => handleChange(event, setLang)}
            className="select"
          >
            {getLangsItems()}
          </select>
        </div>
      )}
    </LanguageContext.Consumer>
  );
};
export default Language;
