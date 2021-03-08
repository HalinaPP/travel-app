import './styles.scss';
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import { COUNTRIES_LIST } from '../../constants/constants';
import { Country } from './CountriesList.model';

const CountriesList: FC = () => {
  let [ inputText, setInputText ] = useState<string>('');
  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  };
  const filterByNameAndCapital = (country: Country) => {
    return (country.name.toLowerCase().includes(inputText.toLowerCase())
      || country.capital.toLowerCase().includes(inputText.toLowerCase()));
  };
  return (
    <React.Fragment>
      <Header inputText={inputText}
              onInputChange={inputChange}/>
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
