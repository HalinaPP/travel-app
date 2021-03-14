import './country.scss';
import React, { FC, useState } from 'react';

import Sight from '../Sight/Sight';
import Weather from '../Weather/Weather';
import Currency from '../Currency/Currency';
import Time from '../Time/Time';
import Map from '../Map/Map';
import Video from '../Video/Video';
import Feedback from '../Feedback/Feedback';

const Country: FC = () => {
  const countryName = 'Canada';
  const capital = 'Ottawa';

  const [isOpen, setIsOpen] = useState(false);
  /* hardcode to make it works */
  const mapProps = {
    iso: 'CA',
    capitalName: 'Ottawa',
    capitalCoords: [45.429186069716145, -75.69326001324995],
    lang: 'en',
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
  return (
    <main className="country">
      <section className="info-block">
        <Weather />
        <Time />
        <Currency currency={'BYN'}/>
        <Currency currency={'CAD'}/>
        <Currency currency={'CHF'}/>
        <Currency currency={'EUR'}/>
        <Currency currency={'GEL'}/>
        <br></br>
        <Currency currency={'ISK'}/>
        <Currency currency={'KZT'}/>
        <Currency currency={'MXN'}/>
        <Currency currency={'NOK'}/>
        <Currency currency={'RON'}/>
      </section>

      <section className="video-block">
        <div className="wrapper">
          <div className="title-block">
            <h2 className="title">{countryName} </h2>
            <h3 className="capital subtitle">{capital}</h3>
            <a href="#" className="btn btn--ghost">
              ♡
            </a>
          </div>
          <Video countryName={countryName}
            src='https://www.youtube.com/embed/wYFKlfr-ELU'/>
        </div>
      </section>

      <section className="sight-slider" id="sight">
        <div className="wrapper">
          <h3 className="subtitle">Photo gallery</h3>
          <Sight setIsOpen={setIsOpen} />
        </div>
        <Feedback isOpen={isOpen} setIsOpen={setIsOpen} />
      </section>

      <section className="about">
        <div className="wrapper">
          <div className="text-block">
            <h2 className="title">Information</h2>
            <div className="about__text">
              <h3 className="subtitle">Title</h3>
              <p className="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus culpa amet tempora quibusdam,
                aliquid vitae consectetur corporis deserunt doloribus nesciunt magni dolore similique officiis minus
                sint doloremque fuga voluptate non!
              </p>
            </div>
          </div>

          <Map {...mapProps} />
        </div>
      </section>
    </main>
  );
};

export default Country;
