import './countriesList.scss';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import heartIcon from '../../assets/icons/heart.png';

import { COUNTRIES_LIST } from '../../constants/constants';
import { CountriesListProps, Country } from './CountriesList.model';

const CountriesList: FC<CountriesListProps> = ({ inputText,getCountries }) => {
  const filterByNameAndCapital = (country: Country) => (
    country.name.toLowerCase().includes(inputText.toLowerCase())
      || country.capital.toLowerCase().includes(inputText.toLowerCase())
  );

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  return (
    <main>
      <section className="promo">
        <div className="wrapper">
          <div className="content-block">
            <h1 className="title">Chose your next trip</h1>
            <h2 className="subtitle">travell app</h2>
            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea
            </p>
            <a href="#" className="btn btn--light">
              Watch now
            </a>
          </div>
          <div className="image-block">
            <div className="image"></div>
            <div className="image-outline"></div>
          </div>
        </div>
      </section>
      <section className="countries">
        <div className="wrapper">
          <a href="#" className="btn btn--ghost">
            <img src={heartIcon} alt="♡" className="icon" />
            Choose your Favorite
          </a>
          <div className="slider">
            <Carousel itemsToScroll={1} itemsToShow={3} isRTL={false} pagination={false}>
              <div className="slide">
                <div className="country-card">
                  <div className="image-block">
                    <div className="image"></div>
                    <div className="image-outline"></div>
                  </div>
                  <div className="title">bela</div>
                  <div className="subtitle">Tbilisi</div>
                </div>
                <div className="country-card">
                  <div className="image-block">
                    <div className="image"></div>
                    <div className="image-outline"></div>
                  </div>
                  <div className="title">Georgia</div>
                  <div className="subtitle">Tbilisi</div>
                </div>
              </div>
              <div className="slide">
                <div className="country-card">
                  <div className="image-block">
                    <div className="image"></div>
                    <div className="image-outline"></div>
                  </div>
                  <div className="title">Georgia</div>
                  <div className="subtitle">Tbilisi</div>
                </div>
                <div className="country-card">
                  <div className="image-block">
                    <div className="image"></div>
                    <div className="image-outline"></div>
                  </div>
                  <div className="title">Georgia</div>
                  <div className="subtitle">Tbilisi</div>
                </div>
              </div>
              <div className="slide">
                <div className="country-card">
                  <div className="image-block">
                    <div className="image"></div>
                    <div className="image-outline"></div>
                  </div>
                  <div className="title">Georgia</div>
                  <div className="subtitle">Tbilisi</div>
                </div>
                <div className="country-card">
                  <div className="image-block">
                    <div className="image"></div>
                    <div className="image-outline"></div>
                  </div>
                  <div className="title">Georgia</div>
                  <div className="subtitle">Tbilisi</div>
                </div>
              </div>
              <div className="slide">
                <div className="country-card">
                  <div className="image-block">
                    <div className="image"></div>
                    <div className="image-outline"></div>
                  </div>
                  <div className="title">Georgia</div>
                  <div className="subtitle">Tbilisi</div>
                </div>
                <div className="country-card">
                  <div className="image-block">
                    <div className="image"></div>
                    <div className="image-outline"></div>
                  </div>
                  <div className="title">Georgia</div>
                  <div className="subtitle">Tbilisi</div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </main>
  );
};
export default CountriesList;
