import './search.scss';
import React, { FC, FormEvent, useContext, useState } from 'react';
import { SearchProps } from './Search.model';
import translation from '../../constants/translation';
import { LanguageContext } from '../../utils/LanguageContext';

const Search: FC<SearchProps> = ({ inputText, onInputChange }) => {
  const { lang: currang } = useContext(LanguageContext);
  const langsInfo = translation[currang];

  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  };
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    onInputChange(inputText);
    event.preventDefault();
  };

  const [isInputOpen, setIsInputOpen] = useState(false);
  function searchToggle() {
    setIsInputOpen(prevState => !prevState);
  }

  return (
    <form className="search-block__form" onSubmit={onSubmit}>
      <input
        className={isInputOpen ? 'search-input searchIn' : 'search-input searchOut'}
        type="search"
        placeholder={langsInfo.search}
        value={inputText}
        onChange={onInput}
        autoFocus
        autoComplete="false"
      />
      <button
        className={isInputOpen ? 'search-button rotate' : 'search-button'}
        type="submit"
        onClick={() => searchToggle()}
      />
    </form>
  );
};
export default Search;
