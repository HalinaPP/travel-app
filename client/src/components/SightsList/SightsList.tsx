import './sightsList.scss';
import { FC, useCallback, useEffect, useState, useContext } from 'react';
import Carousel from 'react-elastic-carousel';
import { Ratings, SightProps, Sights } from './SightsList.model';
import { countRate, getSightRatings } from '../../utils/helpers';
import Feedback from '../Feedback/Feedback';
import useWindowSize from '../../utils/useWindowSize';
import translation from '../../constants/translation';
import { LanguageContext } from '../../utils/LanguageContext';

const SightsList: FC<SightProps> = ({ sights, ratings }) => {
  const { lang: currang } = useContext(LanguageContext);
  const langsInfo = translation[currang];

  const initialData = {
    sight: { id: '', name: '', description: '', imageUrl: '' },
    ratings: [{ id: '', placeId: '', userId: '', rating: 0 }],
  };
  const [isOpen, setIsOpen] = useState(false);
  const [popupData, setPopupData] = useState(initialData);

  const openPopup = useCallback(
    (sight: Sights, currRatings: Ratings[]) => {
      setIsOpen(true);
      setPopupData({ sight, ratings: currRatings });
    },
    [setIsOpen, setPopupData],
  );

  const getSightsList = useCallback(
    () =>
      sights?.length > 0 &&
      sights.map(item => {
        const sightRatings = getSightRatings(item.id, ratings);
        const rate = countRate(sightRatings);

        return (
          <a href="#sight" key={item.name}>
            <div
              className="slide"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
              onClick={() => {
                openPopup(item, sightRatings);
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
      }),
    [sights],
  );

  useEffect(() => {}, [popupData]);

  return (
    <section className="sight-slider" id="sight">
      <div className="wrapper">
        <h3 className="subtitle">{langsInfo.sights}</h3>
        <Carousel
          itemsToScroll={1}
          itemsToShow={useWindowSize().width >= '785' ? 3 : useWindowSize().width >= '435' ? 2 : 1}
          isRTL={false}
          pagination={false}
          className="slider"
        >
          {getSightsList()}
        </Carousel>
      </div>
      <Feedback isOpen={isOpen} setIsOpen={setIsOpen} sight={popupData.sight} ratings={popupData.ratings} />
    </section>
  );
};
export default SightsList;
