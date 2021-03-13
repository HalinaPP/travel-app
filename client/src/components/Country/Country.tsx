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
  console.log(id);
  console.log('currCountry', currCountry);
  const [isOpen, setIsOpen] = useState(false);
  /* hardcode to make it works */
  const mapProps = {
    iso: currCountry.ISOCode,
    capitalName: currCountry.capital,
    capitalCoords: currCountry.capitalLocation,
    lang: 'ru',
    zoom: 2,
    imageHref: 'https://flagof.ru/wp-content/uploads/2018/10/1200px-Flag_of_Canada_1964.svg_.png',
    sights: [
      {
        name: 'Ниагарский водопад',
        coords: [],
      },
      {
        name: 'Висячий мост Капилано',
        coords: [49.34298670224216, -123.1148600289935],
      },
      {
        name: 'Королевский музей Онтарио',
        coords: [43.66786489436412, -79.39468054267884],
      },
      {
        name: 'Базилика Нотр-Дам де Монреаль',
        coords: [45.50465320767228, -73.55615258865281],
      },
      {
        name: 'Великие озёра',
        coords: [45.82131959457854, -84.74107649346662],
      },
      {
        name: 'Национальный парк Банф',
        coords: [51.4969933244283, -115.92803474425936],
      },
      {
        name: 'Ниагарский водопад',
        coords: [43.082596771052536, -79.0738088506289],
      },
    ],
  };

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
            <a href="#" className="btn btn--ghost">
              ♡
            </a>
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

          <Map
            {...{
              iso: currCountry.ISOCode,
              capitalName: currCountry.capital,
              capitalCoords: currCountry.capitalLocation,
              lang: 'ru',
              zoom: 2,
              imageHref: 'https://flagof.ru/wp-content/uploads/2018/10/1200px-Flag_of_Canada_1964.svg_.png',
              sights: [],
            }}
          />
        </div>
      </section>
    </main>
  );
};

export default Country;
