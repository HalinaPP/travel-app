import './sight.scss';
import React, { FC } from 'react';
import Carousel from 'react-elastic-carousel';
import { SightProps } from './Sight.model';
import { countRate } from '../../utils/helpers';

const Sight: FC<SightProps> = ({ setIsOpen, sights, ratings }) => {
  const countryName = 'belarus';

  function openPopup() {
    setIsOpen(true);
  }
  return (
    <Carousel itemsToScroll={1} itemsToShow={3} isRTL={false} pagination={false} className="slider">
      {sights?.length > 0 &&
        sights.map(item => {
          const rate = countRate(item.id, ratings);

          return (
            <a href="#sight">
              <div
                className="slide"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
                key={item.name}
                onClick={() => {
                  openPopup();
                }}
              >
                <div className="overlay"></div>
                <div className="slide__title">{item.name}</div>
                <div className="rating">
                  {rate}
                  <div className="icon--star icon"></div>
                </div>
              </div>
            </a>
          );
        })}
    </Carousel>
  );
};
export default Sight;
