import './sight.scss';
import React, { FC } from 'react';
import Carousel from 'react-elastic-carousel';
import { SIGHTS } from '../../constants/constants';

const Sight: FC = () => {
  const countryName = 'belarus';
  return (
    <Carousel itemsToScroll={1} itemsToShow={3} isRTL={false} pagination={false} className="slider">
      {SIGHTS[countryName].map((item) => (
        <div className="slide" style={{ backgroundImage: `url(${item.bgSrc})` }} key={item.name}>
          <div className="overlay"></div>
          <div className="slide__title">{item.name}</div>
          <div className="rating">
            {item.rate}
            <div className="icon--star icon"></div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
export default Sight;
