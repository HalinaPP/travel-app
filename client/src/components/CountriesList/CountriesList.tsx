import './countriesList.scss';
import React, { FC, useCallback, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import heartIcon from '../../assets/icons/heart.png';
import { CountriesListProps } from './CountriesList.model';
import { CountryProps } from '../Country/Country.model';
import CountriesListItem from '../CountriesListItem/CountriesListItem';
import { setInnerHtml } from '../../utils/helpers';

const CountriesList: FC<CountriesListProps> = ({ inputText, getCountriesFromApi, countries }) => {
  const filterByNameAndCapital = (country: CountryProps) =>
    country.name.toLowerCase().includes(inputText.toLowerCase()) ||
    country.capital.toLowerCase().includes(inputText.toLowerCase());

  useEffect(() => {
    getCountriesFromApi();
  }, [getCountriesFromApi]);

  const getCountriesList = () =>
    countries
      ?.filter(filterByNameAndCapital)
      .reduce((prev, country: CountryProps, index: number, array): JSX.Element => {
        if (index % 2 !== 0 || index === array.length - 1) {
          return (
            <React.Fragment>
              {prev}{' '}
              <div className="slide">
                {' '}
                {array[index - 1] && <CountriesListItem country={array[index - 1]} />}
                <CountriesListItem country={country} />
              </div>
            </React.Fragment>
          );
        }
        return prev;
      }, <></>);

  const getRandomCountry = () => {
    if (countries && countries.length > 0) {
      const randIndex = Math.trunc(Math.random() * countries?.length);
      const randCountry = countries[randIndex];
      return {
        randCountryName: randCountry.name,
        randCountryDescription: randCountry.description.slice(0, 300),
        randCountryLink: `/country/${randCountry.id}`,
        randCountryImage: { backgroundImage: `url(${randCountry.imageUrl})` },
      };
    }
    return {
      randCountryName: '',
      randCountryDescription: '',
      randCountryLink: '',
      randCountryImage: {},
    };
  };

  const { randCountryName, randCountryDescription, randCountryLink, randCountryImage } = getRandomCountry();

  return (
    <main>
      <section className="promo">
        <div className="wrapper">
          <div className="content-block">
            <h1 className="title">Choose your next trip</h1>
            <h2 className="subtitle">{randCountryName}</h2>
            <p className="content" dangerouslySetInnerHTML={setInnerHtml(randCountryDescription)}></p>
            <a href={randCountryLink} className="btn btn--light">
              Watch now
            </a>
          </div>
          <div className="image-block">
            <div className="image" style={randCountryImage}></div>
            <div className="image-outline"></div>
          </div>
        </div>
      </section>
      <section className="countries">
        <div className="wrapper">
          <div className="slider">
            <Carousel itemsToScroll={1} itemsToShow={3} isRTL={false} pagination={false}>
              {getCountriesList()}
            </Carousel>
          </div>
        </div>
      </section>
    </main>
  );
};
export default CountriesList;
