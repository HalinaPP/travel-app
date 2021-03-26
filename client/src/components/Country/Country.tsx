import './country.scss';
import { FC, useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import SightsList from '../SightsList/SightsList';
import Weather from '../Weather/Weather';
import Currency from '../Currency/Currency';
import Time from '../Time/Time';
import Map from '../Map/Map';
import Video from '../Video/Video';
import { CurrCountryProps } from './Country.model';
import { setInnerHtml } from '../../utils/helpers';
import translation from '../../constants/translation';
import { LanguageContext } from '../../utils/LanguageContext';
import useWindowSize from '../../utils/useWindowSize';
import arrowOpen from '../../assets/icons/arrow_open.png';
import arrowClose from '../../assets/icons/arrow_close.png';

const Country: FC<CurrCountryProps> = ({ currCountry, getCountryByIdFromApi }) => {
  const { lang: currLang } = useContext(LanguageContext);
  const langsInfo = translation[currLang];

  const { id }: { id: string } = useParams();

  const initialMapProps = {
    iso: '',
    capitalName: '',
    capitalCoords: [0, 0],
    lang: currLang,
    imageHref: '',
  };
  const oMapProps = {
    iso: currCountry.ISOCode,
    capitalName: currCountry.capital,
    capitalCoords: currCountry.capitalLocation.coordinates,
    lang: currLang,
    imageHref: currCountry.flagUrl,
  };

  const [isDropdownFolded, setIsDropdownFolded] = useState(true);
  const [mapProps, setMapProps] = useState(oMapProps);

  useEffect(() => {
    setMapProps({
      iso: currCountry.ISOCode,
      capitalName: currCountry.capital,
      capitalCoords: currCountry.capitalLocation.coordinates,
      lang: currLang,
      imageHref: currCountry.flagUrl,
    });
  }, [currCountry]);

  useEffect(() => {
    setMapProps(initialMapProps);
    getCountryByIdFromApi(id, currLang);
  }, [id, currLang]);

  const styleConfig = { backgroundImage: `url(${currCountry.imageUrl})` };
  const arrow = (
    <img
      src={isDropdownFolded ? arrowOpen : arrowClose}
      alt="open/close"
      className="arrow_toggle"
      onClick={() => setIsDropdownFolded((fold: boolean) => !fold)}
    />
  );
  
  return (
    <main className="country">
      <section className="info-block" style={styleConfig}>
        {useWindowSize().width <= 425 && (
          <div className="dropdown">
            <div className="country_block">
              <img src={currCountry.imagePreviewUrl} alt={currCountry.name} className="current_country_image" />
              <p className="current_country_name">{currCountry.name}</p>
            </div>
            {arrow}
          </div>
        )}
        <div className={useWindowSize().width <= 425 && isDropdownFolded ? 'hidden widget-block' : 'widget-block'}>
          <Weather capital={currCountry.capital} />
          <Time timeZone={currCountry.timezone} />
          <Currency currency={currCountry.currency} />
        </div>
      </section>

      <section className="video-block">
        <div className="wrapper">
          <div className="title-block">
            <h2 className="title">{currCountry.name} </h2>
            <h3 className="capital subtitle">{currCountry.capital}</h3>
          </div>
          <Video countryName={currCountry.name} src={currCountry.videoUrl} />
        </div>
      </section>

      <SightsList sights={currCountry.places} ratings={currCountry.ratings} />

      <section className="about">
        <div className="wrapper">
          <div className="text-block">
            <h2 className="title">{langsInfo.information}</h2>
            <div className="about__text">
              <p className="content" dangerouslySetInnerHTML={setInnerHtml(currCountry.description)}></p>
            </div>
          </div>

          {mapProps.imageHref && <Map {...mapProps} />}
        </div>
      </section>
    </main>
  );
};

export default Country;
