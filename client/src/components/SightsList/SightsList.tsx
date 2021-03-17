import './sightsList.scss';
import { FC, useCallback, useEffect, useState, useContext, useRef } from 'react';
import Carousel from 'react-elastic-carousel';
import { Ratings, SightProps, Sights } from './SightsList.model';
import { countRate, getSightRatings } from '../../utils/helpers';
import Feedback from '../Feedback/Feedback';
import useWindowSize from '../../utils/useWindowSize';
import translation from '../../constants/translation';
import { LanguageContext } from '../../utils/LanguageContext';

const SightsList: FC<SightProps> = ({ sights, ratings }) => {
  const { lang: currLang } = useContext(LanguageContext);
  const langsInfo = translation[currLang];

  const initialData = {
    sight: { id: '', name: '', description: '', imageUrl: '' },
    ratings: [{ id: '', placeId: '', nickName: '', rating: 0, avatar: 'https://picsum.photos/200/300' }],
  };
  const [isOpen, setIsOpen] = useState(false);
  const [popupData, setPopupData] = useState(initialData);
  const [isFullscreen, setIsFullscreen] = useState(false);

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
              onClick={() => openPopup(item, sightRatings)}
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

  const switchFullscreen = () => {
    setIsFullscreen((fullscreen) => !fullscreen);
  };

  const expandButtonClass = isFullscreen
    ? 'fullScr fullScr--exit'
    : 'fullScr fullScr--enter';
  const expandButtonIconSrc = isFullscreen
    ? '/icons/fs--exit.png'
    : '/icons/fs.png';
  const expandButton = (<div className={expandButtonClass}>
    <img src={expandButtonIconSrc} alt="full screen"
      onClick={switchFullscreen} />
  </div>);
  const fullscreenElement = document.getElementById('wrapper');

  const toggleFullscreen = () => {
    if (isFullscreen) {
      fullscreenElement?.requestFullscreen();
    } else {
      document.exitFullscreen()
        .catch(err => Promise.resolve(err));
    }
  };

  useEffect(() => toggleFullscreen(), [isFullscreen]);

  useEffect(() => {}, [popupData]);

  function getSliderCount() {
    const windowWidth = useWindowSize().width;
    if (windowWidth >= '785') {
      return 3;
    }
    if (windowWidth >= '435' && windowWidth < '785') {
      return 2;
    }
    return 1;
  }

  const carousel =
    <Carousel className="slider" isRTL={false}
      pagination={false} itemsToScroll={1}
      itemsToShow={getSliderCount()} >
      {getSightsList()}
    </Carousel>;

  const images = (
    <div className="slider">
      {getSightsList()}
    </div>
  );

  return (
    <section className="sight-slider" id="sight">
      <div className="wrapper" id="wrapper">
        <h3 className="subtitle">{langsInfo.sights}</h3>
        {expandButton}
        {isFullscreen ? images : carousel}
      </div>
      <Feedback isOpen={isOpen} setIsOpen={setIsOpen} sight={popupData.sight} ratings={popupData.ratings} />
    </section>
  );
};
export default SightsList;
