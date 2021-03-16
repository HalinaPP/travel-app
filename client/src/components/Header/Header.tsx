import './header.scss';
import { FC, useEffect, useState, useContext } from 'react';
import { useLocation, Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Search from '../Search';
import { HeaderProps } from './Header.model';
import Language from '../Language/Language';
import Auth from '../Auth';
import logo from '../../assets/images/logo2.png';
import { StateModel } from '../../reducers';
import defaultImage from '../../assets/auth-icon.png';
import { LanguageContext } from '../../utils/LanguageContext';
import useWindowSize from '../../utils/useWindowSize';

const Header: FC<HeaderProps> = ({ inputText, onInputChange }) => {
  const { lang: currLang } = useContext(LanguageContext);
  const linkMain = `/${currLang}`;
  const location = useLocation();
  const history = useHistory();
  const [isMain, setIsMain] = useState(location.pathname === linkMain);
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const isUserLogged = useSelector((state: StateModel) => state.user) ?? false;

  const loggedStyles = {
    profileImage: {
      backgroundImage: `url(${isUserLogged ? isUserLogged.avatar : defaultImage})`,
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
    setIsMain(location.pathname === linkMain);
  }, [location]);

  useEffect(() => {
    localStorage.setItem('currLangTravelApp', currLang);
    history.push(`/${currLang}${location.pathname.slice(3)}`);
  }, [currLang]);

  return (
    <header>
      <div className="wrapper">
        <nav className="header__nav nav">
          <ul className="header__nav__list nav__list">
            <div className="logo">
              <Link to={linkMain}>
                <img alt="logo" src={logo} />
              </Link>
            </div>
            <li className="nav__item">
              <a href="/map" className="link">
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
          { isAuthModalOpen && <Auth/> }
          <div className="settings" onClick={() => langToggle()} style={styles.setting}>
            <a href="#"></a>
          </div>

          <Language />

        </div>
      </div>
    </header>
  );
};

export default Header;
