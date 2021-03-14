import './countriesList.scss';
import React, { FC, useCallback, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import heartIcon from '../../assets/icons/heart.png';
import { CountriesListProps } from './CountriesList.model';
import { CountryProps } from '../Country/Country.model';
import CountriesListItem from '../CountriesListItem/CountriesListItem';

const CountriesList: FC<CountriesListProps> = ({ inputText, getCountriesFromApi, countries }) => {
  const filterByNameAndCapital = (country: CountryProps) =>
    country.name.toLowerCase().includes(inputText.toLowerCase()) ||
    country.capital.toLowerCase().includes(inputText.toLowerCase());

  useEffect(() => {
    getCountriesFromApi();
  }, [getCountriesFromApi]);

  const getCountriesList = () =>
    countries?.filter(filterByNameAndCapital).map(
      (country: CountryProps, index: number): JSX.Element => (
        <div className="slide">
          <CountriesListItem country={country} />
        </div>
      ),
    );

  return (
    <main>
      <section className="promo">
        <div className="wrapper">
          <div className="content-block">
            <h1 className="title">Choose your next trip</h1>
            <h2 className="subtitle">travel app</h2>
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
              {/* {getCountriesList()} */}
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
