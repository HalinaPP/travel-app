import './header.scss';
import React, { FC, useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Search from '../Search';
import { HeaderProps } from './Header.model';
import Language from '../Language/Language';

const Header: FC<HeaderProps> = ({ inputText, onInputChange }) => {
  const location = useLocation();
  const [isMain, setIsMain] = useState(location.pathname === '/');

  useEffect(() => {
    setIsMain(location.pathname === '/');
  }, [location]);

  return (
    <header>
      <div className="wrapper">
        <nav className="header__nav nav">
          <ul className="header__nav__list nav__list">
            <div className="logo">
              <Link to="/">app logo</Link>
            </div>
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
      <Language />
    </header>
  );
};

export default Header;
