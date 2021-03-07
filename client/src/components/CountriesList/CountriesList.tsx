import './styles.scss';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const CountriesList: FC = () => (
  <React.Fragment>
    <div>Countries list</div>
    <Link to={'/country/1'}>Contry1</Link>
  </React.Fragment>
);
export default CountriesList;
