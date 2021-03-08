import './styles.scss';
import React, { FC } from 'react';
import { FOOTER_COPYRIGHT } from '../../constants/constants';

const Footer: FC = () => (
  <footer>
    <div className='dev-list'>
      {FOOTER_COPYRIGHT.developers.map((item) => (
        <a href={item.link} key={item.name}>
          {item.name}
        </a>
      ))}
    </div>
    <div>
      <a href={FOOTER_COPYRIGHT.rsLogo.link}>
        <img src={FOOTER_COPYRIGHT.rsLogo.imgPath} alt={FOOTER_COPYRIGHT.rsLogo.name} />
      </a>
    </div>
  </footer>
);
export default Footer;
