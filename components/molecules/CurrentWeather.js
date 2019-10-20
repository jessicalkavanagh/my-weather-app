import React from 'react';
import CurrentCity from '../atoms/CurrentCity';
import Button from '../atoms/Button';
import CurrentTemp from '../atoms/CurrentTemp';

const CurrentWeather = () => {
  return (
    <div>
      <CurrentCity />
      <Button />
      <CurrentTemp />
    </div>
  );
};

export default CurrentWeather;