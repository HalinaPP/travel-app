import './styles.scss';
import React, { FC } from 'react';
import Search from '../Search/';
import { HeaderProps } from './Header.model';

const Header: FC<HeaderProps> = (props: HeaderProps) => {
  const { inputText, onInputChange } = props;
  return (
   <header>
       <div>Logo</div>
       <Search inputText={inputText}
               onInputChange={onInputChange} />
       <div>lang</div>
   </header>
  );
}
export default Header;
