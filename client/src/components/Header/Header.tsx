import './styles.scss';
import React, { FC } from 'react';
import Search from '../Search/Search';

const Header: FC = () => (
   <header>
       <div>Logo</div>
       <Search/>
       <div>lang</div>
   </header>
);
export default Header;
