import './sight.scss';
import Carousel from 'react-elastic-carousel';
import { SIGHTS } from '../../constants/constants';
import { SightProps } from './Sight.model';
import useWindowSize from '../../utils/useWindowSize';

const Sight: any = ({ setIsOpen }: SightProps) => {
  const countryName = 'belarus';

  function openPopup() {
    setIsOpen(true);
  }
  console.log(useWindowSize().width);
  return (
    <Carousel itemsToScroll={1} itemsToShow={
      useWindowSize().width >= '640' ? 3 : 2
    } isRTL={false} pagination={false} className="slider">
      {SIGHTS[countryName].map((item) => (
        <a href="#sight">
          <div
            className="slide"
            style={{ backgroundImage: `url(${item.bgSrc})` }}
            key={item.name}
            onClick={() => {
              openPopup();
            }}
          >
            <div className="overlay"></div>
            <div className="slide__title">{item.name}</div>
            <div className="rating">
              {item.rate}
              <div className="icon--star icon"></div>
            </div>
          </div>
        </a>
      ))}
    </Carousel>
  );
};
export default Sight;
