import './styles.scss';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { CountryProps } from '../Country/Country.model';

const CountriesListItem: FC<{ country: CountryProps }> = ({ country }) => {
  const countryLink = `/country/${country.id}`;

  return (
    <Link to={countryLink}>
      <div className="country-card">
        <div className="image-block">
          <div className="image"></div>
          <div className="image-outline"></div>
        </div>
        <div className="title">{country.name}</div>
        <div className="subtitle">{country.capital}</div>
      </div>
    </Link>
  );
};

export default CountriesListItem;
