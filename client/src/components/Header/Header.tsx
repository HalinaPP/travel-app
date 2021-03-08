import './styles.scss';
import React, { FC } from 'react';
import Search from '../Search/';
import { HeaderProps } from './Header.model';

const Header: FC<HeaderProps> = (props: HeaderProps) => {
  const { inputText, onInputChange, isMain } = props;

  const searchComponent = isMain
    ? <Search inputText={inputText}
          onInputChange={onInputChange} />
    : null;
  return (
   <header>
       <div>Logo</div>
       {searchComponent}
       <div>lang</div>
   </header>
  );
}
export default Header;
