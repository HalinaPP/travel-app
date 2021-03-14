import './search.scss';
import React, {
  FC, FormEvent, useContext, useState,
} from 'react';
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

  const [isInputOpen, setIsInputOpen] = useState(false);
  function searchToggle() {
    setIsInputOpen(prevState => !prevState);
  }

  const placeHolder = currLang === 'ru' ? 'Поиск' : 'Search';

  return (
    <form className="search-block__form" onSubmit={onSubmit}>
      <input
        className={isInputOpen ? 'search-input searchIn' : 'search-input searchOut'}
        type="search"
        placeholder={placeHolder}
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
