import './styles.scss';
import React, { FC } from 'react';
import { SearchProps } from '../Search/Search.model';

const Search: FC<SearchProps> = (props: SearchProps) => {
  const { inputText, onInputChange } = props;
  return (
        <div className="search-container">
          <input className="search-input"
                 placeholder="Search"
                 value={inputText}
                 onChange={onInputChange} />
        </div>
  );
}
export default Search;
