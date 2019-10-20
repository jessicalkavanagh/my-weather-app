import React from 'react';
import Symbol from '../atoms/Symbol';
import HourlyWeather from '../molecules/HourlyWeather';

const DailyWeatherItem = () => {
  return (
    <div>
      <h3>Wednesday</h3>
      <Symbol icon="sunny" />
      <div>22</div>
      <div>10</div>
      <Symbol />
    </div>
  );
};

export default DailyWeatherItem;