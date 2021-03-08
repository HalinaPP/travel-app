import './styles.scss';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { COUNTRIES_LIST } from '../../constants/constants';
import { CountriesListProps, Country } from './CountriesList.model';

const CountriesList: FC<CountriesListProps> = ({ inputText }) => {
  const filterByNameAndCapital = (country: Country) => {
    return (country.name.toLowerCase().includes(inputText.toLowerCase())
      || country.capital.toLowerCase().includes(inputText.toLowerCase()));
  };
  return (
    <React.Fragment>
      <div>
        <ul>
          {
            COUNTRIES_LIST
              .filter(filterByNameAndCapital)
              .map((country) => {
              return <li key={country.name}>{country.name}</li>
            })
          }
        </ul>
      </div>
      <Link to={'/country/1'}>Country1</Link>
    </React.Fragment>
  );
}
export default CountriesList;
