import './styles.scss';
import React, { FC, useContext, useEffect, useState } from 'react';
import { WeatherProps } from './Weather.model';
import { API_KEY, URL } from './constants';
import { LanguageContext } from '../../utils/LanguageContext';

const Weather: FC<WeatherProps> = ({ capital }) => {
  const { lang: currLang } = useContext(LanguageContext);
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState<any>(null);

  const urlQueryOptions = `?q=${capital}&lang=${currLang}&${API_KEY}&units=metric`;

  useEffect(() => {
    fetch(URL + urlQueryOptions)
      .then(res => res.json())
      .then(data => {
        setWeatherData(data);
        setLoading(false);
      });
  }, [capital]);

  if (loading) {
    return <div>--</div>;
  }

  return (
    <div className="weather-container">
      <div className="city-container">
        <span className="city">{capital}</span>
        <span className="temperature">
          {weatherData.main.temp}°C
        </span>
      </div>
      <div className="icon-container">
        <i className={`weather-icon owf owf-${weatherData.weather[0].id}`} />
        <span className="icon-description">
          {weatherData.weather[0].description.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default Weather;
