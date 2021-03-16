import './countryListItem.scss';
import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CountryProps } from '../Country/Country.model';
import { LanguageContext } from '../../utils/LanguageContext';

const CountriesListItem: FC<{ country: CountryProps }> = ({ country }) => {
  const { lang: currLang } = useContext(LanguageContext);
  const countryLink = `/${currLang}/country/${country.id}`;

  return (
    <Link to={countryLink}>
      <div className="country-card">
        <div className="image-block">
          <div className="image" style={{ backgroundImage: `url(${country.imagePreviewUrl})` }}></div>
          <div className="image-outline"></div>
        </div>
        <div className="title">{country.name}</div>
        <div className="subtitle">{country.capital}</div>
      </div>
    </Link>
  );
};

export default CountriesListItem;
