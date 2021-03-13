import './country.scss';
import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sight from '../Sight/Sight';
import Weather from '../Weather/Weather';
import Currency from '../Currency/Currency';
import Time from '../Time/Time';
import Map from '../Map/Map';
import Video from '../Video/Video';
import Feedback from '../Feedback/Feedback';
import { CurrCountryProps } from './Country.model';
import { setInnerHtml } from '../../utils/helpers';

const Country: FC<CurrCountryProps> = ({ currCountry, getCountryByIdFromApi }) => {
  const { id }: { id: string } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [mapProps, setMapProps] = useState({
    iso: currCountry.ISOCode,
    capitalName: currCountry.capital,
    capitalCoords: currCountry.capitalLocation.coordinates,
    lang: 'ru',
    imageHref: 'https://flagof.ru/wp-content/uploads/2018/10/1200px-Flag_of_Canada_1964.svg_.png',
  });

  useEffect(() => {
    setMapProps({
      iso: currCountry.ISOCode,
      capitalName: currCountry.capital,
      capitalCoords: currCountry.capitalLocation.coordinates,
      lang: 'ru',
      imageHref: 'https://flagof.ru/wp-content/uploads/2018/10/1200px-Flag_of_Canada_1964.svg_.png',
    });
  });

  useEffect(() => {
    getCountryByIdFromApi(id);
  }, [getCountryByIdFromApi, id]);

  const styleConfig = { backgroundImage: `url(${currCountry.imageUrl})` };

  return (
    <main className="country">
      <section className="info-block" style={styleConfig}>
        <Weather />
        <Time />
        <Currency />
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

      <section className="sight-slider" id="sight">
        <div className="wrapper">
          <h3 className="subtitle">Photo gallery</h3>
          <Sight setIsOpen={setIsOpen} sights={currCountry.places} ratings={currCountry.ratings} />
        </div>
        <Feedback isOpen={isOpen} setIsOpen={setIsOpen} />
      </section>

      <section className="about">
        <div className="wrapper">
          <div className="text-block">
            <h2 className="title">Information</h2>
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
