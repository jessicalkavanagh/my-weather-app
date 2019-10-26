import React from 'react';
import Symbol from '../atoms/Symbol';
import HourlyWeather from './HourlyWeather';

const DailyWeatherItem = ({ date, icon, list, maxTemp, minTemp, ...props }) => {
  return (
    <div>
      <h3>{date}</h3>
      <Symbol icon={icon} />
      <div>{maxTemp}</div>
      <div>{minTemp}</div>
      <HourlyWeather list={list} />
    </div>
  );
};

export default DailyWeatherItem;