import './styles.scss';
import React, { FC, FormEvent } from 'react';
import { SearchProps } from '../Search/Search.model';

const Search: FC<SearchProps> = (props: SearchProps) => {
  const { inputText, onInputChange } = props;
  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  }
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    onInputChange(inputText);
    event.preventDefault();
  }
  return (
        <form className="search-container"
              onSubmit={onSubmit} >
          <input className="search-input"
                 placeholder="Search"
                 value={inputText}
                 onChange={onInput} />
          <button className="search-button"
                  type="submit" >
            Search
          </button>
        </form>
  );
}
export default Search;
