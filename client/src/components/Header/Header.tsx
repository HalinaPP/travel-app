import './header.scss';
import React, { FC } from 'react';
import Search from '../Search';
import { HeaderProps } from './Header.model';

const Header: FC<HeaderProps> = ({ inputText, onInputChange, isMain }) => (
  <header>
    <div className="wrapper">
      <nav className="header__nav nav">
        <ul className="header__nav__list nav__list">
          <div className="logo">app logo</div>
          <li className="nav__item">
            <a href="#" className="link">
                About
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="link">
                Map
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="link">
                Contacts
            </a>
          </li>
        </ul>
      </nav>
      <div className="users-block">
        <div className="search-block">{isMain && <Search inputText={inputText} onInputChange={onInputChange} />}</div>
        <div className="avatar">
          <a href="#"></a>
        </div>
        <div className="settings">
          <a href="#"></a>
        </div>
      </div>
    </div>
  </header>
);
export default Header;
