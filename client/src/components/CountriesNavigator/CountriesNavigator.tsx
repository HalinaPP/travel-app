import { FC } from 'react';
import { CountriesNavigatorProps } from './CountriesNavigator.model';
import './countriesNavigator.scss';

const CountriesNavigator: FC<CountriesNavigatorProps> = () => {
  // мне надо получать массив стран и ссылку на их main bg
  // так же надо получать current country
  const coountries = [
    ['georgia', '/images/main_small.png'],
    ['russia', '/images/main_small.png'],
    ['norway', '/images/main_small.png'],
    ['china', '/images/main_small.png'],
    ['usa', '/images/main_small.png'],
    ['italy', '/images/main_small.png'],
    ['germany', '/images/main_small.png'],
    ['uar', '/images/main_small.png'],
  ];
  return (
    <aside>
      <ul className="countries-navigator">
        {coountries.map(country => (
          <li className="countries-navigator__item" key={country[0]}>
            <a href="#" className="link">
              <img src={country[1]} className="icon countries-navigator__img" alt={country[0]} />
              <p className='country_name'>{country[0]}</p>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CountriesNavigator;
