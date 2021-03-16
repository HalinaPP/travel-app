import './header.scss';
import { FC, useEffect, useState, useContext } from 'react';
import { useLocation, Link, useHistory } from 'react-router-dom';
import Search from '../Search';
import { HeaderProps } from './Header.model';
import Language from '../Language/Language';
import logo from '../../assets/images/logo2.png';
import { LanguageContext } from '../../utils/LanguageContext';
import useWindowSize from '../../utils/useWindowSize';

const Header: FC<HeaderProps> = ({ inputText, onInputChange }) => {
  const { lang: currLang } = useContext(LanguageContext);
  const linkMain = `/${currLang}`;
  const location = useLocation();
  const history = useHistory();
  const [isMain, setIsMain] = useState(location.pathname === linkMain);
  // const [isSettingOpen, setIsSettingOpen] = useState(false);

  // const styles = {
  //   setting: {
  //     backgroundImage: "url('/icons/settings.png')",
  //   },
  // };

  // function langToggle() {
  //   setIsSettingOpen(prevState => !prevState);
  // }

  useEffect(() => {
    setIsMain(location.pathname === linkMain);
  }, [location]);

  useEffect(() => {
    localStorage.setItem('currLangTravelApp', currLang);
    history.push(`/${currLang}${location.pathname.slice(3)}`);
  }, [currLang]);

  // dummy data
  const currentCountryImage = '/images/main_small.png';
  const currentCountryName = 'Canada';

  return (
    <header>
      <div className="wrapper">
        <nav className="header__nav nav">
          <ul className="header__nav__list nav__list">
            <div className="logo">
              <Link to={linkMain}>
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
          <div className="avatar">
            <a href="#"></a>
          </div>
          <Language />
        </div>
      </div>
    </header>
  );
};

export default Header;
