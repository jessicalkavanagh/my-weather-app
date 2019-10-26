import React from 'react';
import CurrentCity from '../atoms/CurrentCity';
import CurrentTemp from '../atoms/CurrentTemp';
import Link from '../atoms/Link';

const CurrentWeather = ({ city, temperature, onTextLinkClick, ...props }) => {
  return (
    <div>
      <CurrentCity city={city} />
      <Link onButtonClick={onTextLinkClick}>Change City</Link>
      <CurrentTemp temperature={temperature} />
    </div>
  );
};

export default CurrentWeather;