// eslit-disable
import './country.scss';
import React, { FC } from 'react';
import Sight from '../Sight/Sight';
import Weather from '../Weather/Weather';
import Currency from '../Currency/Currency';
import Time from '../Time/Time';
import Map from '../Map/Map';
import Video from '../Video/Video';

const Country: FC = () => {
  const countryName = 'Canada';
  const capital = 'Ottawa';

  return (
    <main className="country">
      <div className="overlay">
        <div className="feedback__popup">

        </div>
      </div>
      <section className="info-block">
        <Weather />
        <Time />
        <Currency />
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
          <Video />
        </div>
      </section>

      <section className="sight-slider">
        <div className="wrapper">
          <h3 className="subtitle">Photo gallery</h3>
          <Sight />
        </div>
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

          <Map />
        </div>
      </section>
    </main>
  );
};

export default Country;
