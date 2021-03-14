import './header.scss';
import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Search from '../Search';
import { HeaderProps } from './Header.model';
import Language from '../Language/Language';
import Auth from '../Auth';

const Header: FC<HeaderProps> = ({ inputText, onInputChange }) => {
  const location = useLocation();
  const [isMain, setIsMain] = useState(location.pathname === '/');
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

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
            <div className="logo">app logo</div>
            <li className="nav__item">
              <a href="#" className="link">
                Map
              </a>
            </li>
          </ul>
        </nav>
        <div className="users-block">
          <div className="search-block">{isMain && <Search inputText={inputText} onInputChange={onInputChange} />}</div>
          <div onClick={() => setAuthModalOpen(true)}
            className="avatar">
            <a href="#"></a>
          </div>
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
