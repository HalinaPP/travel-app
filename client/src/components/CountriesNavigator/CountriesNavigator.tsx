import { FC, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CountriesNavigatorProps } from './CountriesNavigator.model';
import './countriesNavigator.scss';
import { LanguageContext } from '../../utils/LanguageContext';

const CountriesNavigator: FC<CountriesNavigatorProps> = ({ currCountryName, getCountriesFromApi, countries }) => {
  const { lang: currLang } = useContext(LanguageContext);

  useEffect(() => {
    getCountriesFromApi(currLang);
  }, [getCountriesFromApi, currLang]);

  return (
    <aside>
      <ul className="countries-navigator">
        {countries &&
          countries.map(country => {
            const countryLink = `/${currLang}/country/${country.id}`;

            let countrySel = 'link';
            if (country.name === currCountryName) {
              countrySel = 'link selected';
            }
            return (
              <li className="countries-navigator__item" key={country.name}>
                <Link to={countryLink} className={countrySel}>
                  <img src={country.imagePreviewUrl} className="icon countries-navigator__img" alt={country.name} />
                  <p className="country_name">{country.name}</p>
                </Link>
              </li>
            );
          })}
      </ul>
    </aside>
  );
};

export default CountriesNavigator;
