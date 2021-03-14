import './styles.scss';
import React, {
  FC, useState, useEffect, useContext,
} from 'react';
import { Context } from '../../utils/Context';
import { decimalize } from '../../utils/helpers';
import { TimeProps } from './Time.model';

const Time: FC<TimeProps> = ({ timeZone }) => {
  const { lang: currLang } = useContext(Context);
  const [currentDateAndTime, setCurrentDateAndTime] = useState(new Date(
    new Date().toLocaleString('en-US', { timeZone }),
  ));
  const hour = currentDateAndTime.getHours();
  const min = currentDateAndTime.getMinutes();
  const sec = currentDateAndTime.getSeconds();
  const time = `${hour}:${decimalize(min)}:${decimalize(sec)}`;

  const date = currentDateAndTime.getDate();
  const month = currentDateAndTime.getMonth();
  const year = currentDateAndTime.getFullYear();
  const day = currentDateAndTime.getDay();

  const fullDate = `${date} ${month} ${year}, ${day}`;

  return (
    <div className="time-container">
      <div>{fullDate}</div>
      <div>{time}</div>
    </div>
  );
};
export default Time;
