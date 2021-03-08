import './styles.scss';
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import { COUNTRIES_LIST } from '../../constants/constants';

const CountriesList: FC = () => {
  let [ inputText, setInputText ] = useState<string>('');
  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  };
  return (
    <React.Fragment>
      <Header inputText={inputText}
              onInputChange={inputChange}/>
      <div>
        <ul>
          {
            COUNTRIES_LIST.map((countryName) => {
              return <li key={countryName}>{countryName}</li>
            })
          }
        </ul>
      </div>
      <Link to={'/country/1'}>Country1</Link>
    </React.Fragment>
  );
}
export default CountriesList;
