import './styles.scss';
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import Sight from '../Sight/Sight';
import Weather from '../Weather/Weather';
import Currency from '../Currency/Currency';
import Time from '../Time/Time';
import Map from '../Map/Map';
import Video from '../Video/Video';

const Country: FC = () => (
  <React.Fragment>
    <div>Country Name </div>
    <div>About Country</div>
    <Weather />
    <Currency />
    <Time />
    <Sight />
    <Video />
    <Map />
  </React.Fragment>
);

export default Country;
