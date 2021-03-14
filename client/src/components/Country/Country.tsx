import './country.scss';
import React, { FC, useState, useEffect, useContext } from 'react';
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

const Country: FC<CurrCountryProps> = ({ currCountry, getCountryByIdFromApi }) => {
  const { lang: currLang } = useContext(LanguageContext);
  const langsInfo = translation[currLang];
  const { id }: { id: string } = useParams();

  const [mapProps, setMapProps] = useState({
    iso: currCountry.ISOCode,
    capitalName: currCountry.capital,
    capitalCoords: currCountry.capitalLocation.coordinates,
    lang: 'ru',
    imageHref: 'https://flagof.ru/wp-content/uploads/2018/10/1200px-Flag_of_Canada_1964.svg_.png',
  });

  useEffect(() => {
    /*
    setMapProps({
      iso: currCountry.ISOCode,
      capitalName: currCountry.capital,
      capitalCoords: currCountry.capitalLocation.coordinates,
      lang: 'ru',
      imageHref: 'https://flagof.ru/wp-content/uploads/2018/10/1200px-Flag_of_Canada_1964.svg_.png',
    });
    */
  });

  useEffect(() => {
    getCountryByIdFromApi(id, currLang);
  }, [getCountryByIdFromApi, id, currLang]);

  const styleConfig = { backgroundImage: `url(${currCountry.imageUrl})` };

  return (
    <main className="country">
      <section className="info-block" style={styleConfig}>
        <Weather />
        <Time />
        <Currency currency={'BYN'}/>
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

          <Map {...mapProps} />
        </div>
      </section>
    </main>
  );
};

export default Country;
