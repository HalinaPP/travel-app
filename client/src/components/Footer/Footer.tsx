import './footer.scss';
import React, { FC, useContext } from 'react';
import { FOOTER_COPYRIGHT } from '../../constants/constants';
import RSSLogo from '../../assets/images/rs_school_react.png';
import githubLogo from '../../assets/images/github-logo.svg';
import youtubeLogo from '../../assets/images/youtube.png';
import logo from '../../assets/images/logo2.png';
import translation from '../../constants/translation';
import { LanguageContext } from '../../utils/LanguageContext';

const Footer: FC = () => {
  const { lang: currang } = useContext(LanguageContext);
  const langsInfo = translation[currang];

  return (
    <footer>
      <div className="wrapper">
        <nav className="footer__nav nav">
          <ul className="footer__nav__list nav__list">
            <div className="logo">
              <img src={logo} />
            </div>
          </ul>
        </nav>

        <div className="copyright">
          <div className="developers">
            <div className="dev-list">
              {FOOTER_COPYRIGHT.developers.map(item => (
                <div className="author" key={item.name}>
                  <img src={githubLogo} className="icon" alt="Github" />
                  <a href={item.link} className="link">
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
            <div className="RSS">
              <img src={RSSLogo} className="icon" alt="RSSchool" />
              <a href="https://rs.school/react/" className="link">
                2021
              </a>
            </div>
            <div className="youtube">
              <img src={youtubeLogo} className="icon" alt="youtube link" />
              <a href="https://www.youtube.com/watch?v=oLc4CqQjSAw" className="link">
                {langsInfo.review}
              </a>
            </div>
          </div>
          <div className="design-copyright">{langsInfo.designBy}</div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
