import './search.scss';
import React, { FC, FormEvent, useContext } from 'react';
import { SearchProps } from './Search.model';
import { Context } from '../../utils/Context';

const Search: FC<SearchProps> = ({ inputText, onInputChange }) => {
  const { lang: currLang } = useContext(Context);
  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  };
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    onInputChange(inputText);
    event.preventDefault();
  };

  const placeHolder = currLang === 'ru' ? 'Поиск' : 'Search';
  return (
    <form className="search-block" onSubmit={onSubmit}>
      <input
        className="search-input"
        type="search"
        placeholder={placeHolder}
        value={inputText}
        onChange={onInput}
        autoFocus
        autoComplete="false"
      />
      <button className="search-button" type="submit" />
    </form>
  );
};
export default Search;
