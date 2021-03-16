import './styles.scss';
import React, {
  FC, useState, useEffect, useContext,
} from 'react';
import { LanguageContext } from '../../utils/LanguageContext';
import { decimalize } from '../../utils/helpers';
import { TimeProps } from './Time.model';
import { MONTHS, DAYS } from './constants';

const Time: FC<TimeProps> = ({ timeZone }) => {
  const { lang: currLang } = useContext(LanguageContext);
  const [currentDate, setCurrentDate] = useState('--');
  const [currentTime, setCurrentTime] = useState('--');
  const [timerValue, setTimerValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimerValue((prevTimer) => (prevTimer + 1) % 2);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const currentDateAndTime = new Date(new Date()
      .toLocaleString('en-US', { timeZone }));

    const date = currentDateAndTime.getDate();
    const month = currentDateAndTime.getMonth();
    const year = currentDateAndTime.getFullYear();
    const day = currentDateAndTime.getDay();

    const hour = currentDateAndTime.getHours();
    const min = currentDateAndTime.getMinutes();
    const sec = currentDateAndTime.getSeconds();

    setCurrentDate(`${date} ${MONTHS[currLang][month].toUpperCase()} ${year}, ${DAYS[currLang][day].toUpperCase()}`);
    setCurrentTime(`${hour}:${decimalize(min)}:${decimalize(sec)}`);
  }, [timerValue]);

  return (
    <div className="time-container">
      <div className="date">{currentDate}</div>
      <h2 className="time">{currentTime}</h2>
    </div>
  );
};
export default Time;
