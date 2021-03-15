import './header.scss';
import React, { FC, useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Search from '../Search';
import { HeaderProps } from './Header.model';
import Language from '../Language/Language';
import Auth from '../Auth';
import logo from '../../assets/images/logo2.png';
import { StateModel } from '../../reducers';
import { User } from '../Auth/auth.model';

const Header: FC<HeaderProps> = ({ inputText, onInputChange }) => {
  const location = useLocation();
  const [isMain, setIsMain] = useState(location.pathname === '/');
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  // const state = useSelector((state: StateModel) => state.user);
  const isUserLogged = useSelector((state: StateModel) => state.user) ?? false;
  // const isUserLogged = state.user;
  console.log(isUserLogged);

  const loggedStyles = {
    profileImage: {
      backgroundImage: `url(${isUserLogged ? isUserLogged.avatar : '../../assets/avatar-mock.png'})`,
    },
  };

  const styles = {
    setting: {
      backgroundImage: "url('/icons/settings.png')",
    },
  };

  function langToggle() {
    setIsSettingOpen(prevState => !prevState);
  }

  useEffect(() => {
    setIsMain(location.pathname === '/');
  }, [location]);

  return (
    <header>
      <div className="wrapper">
        <nav className="header__nav nav">
          <ul className="header__nav__list nav__list">
            <div className="logo">
              <Link to="/">
                <img src={logo} />
              </Link>
            </div>
            <li className="nav__item">
              <a href="#" className="link">
                Map
              </a>
            </li>
          </ul>
        </nav>
        <div className="users-block">
          <div className="search-block">{isMain && <Search inputText={inputText} onInputChange={onInputChange} />}</div>
          { isUserLogged ?
            <div style={loggedStyles.profileImage}
              className="avatar">
              <a href="#"></a>
            </div> :
            <div style={loggedStyles.profileImage}
              onClick={() => setAuthModalOpen(true)}
              className="avatar">
            </div>

          }
          { isAuthModalOpen ? <Auth/> : null }
          <div className="settings" onClick={() => langToggle()} style={styles.setting}>
            <a href="#"></a>
          </div>
        </div>
        {isSettingOpen && <Language />}
      </div>
    </header>
  );
};

export default Header;
