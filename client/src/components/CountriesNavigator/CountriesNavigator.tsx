import { FC } from 'react';
import { CountriesNavigatorProps } from './CountriesNavigator.model';
import './countriesNavigator.scss';

const CountriesNavigator: FC<CountriesNavigatorProps> = () => {
  const coountries = [
    ['georgia', '/images/main_mini.png'],
    ['russia', '/images/main_mini.png'],
    ['norway', '/images/main_mini.png'],
    ['china', '/images/main_mini.png'],
    ['usa', '/images/main_mini.png'],
    ['italy', '/images/main_mini.png'],
    ['germany', '/images/main_mini.png'],
    ['uar', '/images/main_mini.png'],
  ];
  return (
    <aside>
      <ul className='countries-navigator'>
        {coountries.map(country => (

          <li className="countries-navigator__item" key={country[0]}>
            <a href="#" className="link">
              <img src={country[1]} className="icon countries-navigator__img" alt={country[0]} />
              {country[0]}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CountriesNavigator;
