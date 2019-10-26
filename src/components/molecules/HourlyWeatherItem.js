import React from 'react';
import Symbol from '../atoms/Symbol';

const HourlyWeather = ({ time, icon, maxTemp, ...props }) => {
  return (
    <li>
      <div>{time}</div>
      <Symbol icon={icon} />
      <div>{maxTemp}</div>
    </li>
  );
};

export default HourlyWeather;