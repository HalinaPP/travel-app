import './search.scss';
import React, { FC, FormEvent } from 'react';
import { SearchProps } from './Search.model';

const Search: FC<SearchProps> = ({ inputText, onInputChange }) => {
  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  };
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    onInputChange(inputText);
    event.preventDefault();
  };

  return (
    <form className="search-block" onSubmit={onSubmit}>
      <input
        className="search-input"
        type="search"
        placeholder="Search"
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
