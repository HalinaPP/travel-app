import './styles.scss';
import React, { FC } from 'react';
import Search from '../Search/';
import { HeaderProps } from './Header.model';

const Header: FC<HeaderProps> = ({ inputText, onInputChange, isMain }) => {
  return (
   <header>
       <div>Logo</div>
       {isMain
        && <Search inputText={inputText}
                   onInputChange={onInputChange} />}
       <div>lang</div>
   </header>
  );
}
export default Header;
