import React from 'react';
import CurrentCity from '../atoms/CurrentCity';
import CurrentTemp from '../atoms/CurrentTemp';
import TextLink from '../atoms/TextLink';
import './CurrentWeather.css';

const CurrentWeather = ({city, temperature, onTextLinkClick, linkType, ...props}) => {
  return (
      <>
          <div class="cityimage" style={{ backgroundImage: `url(/images/${city}.jpg)`, 
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          }}>
              <div class="currentweather">
                  <CurrentCity city={city}/>
                  <TextLink linkType="changecitylink" onButtonClick={onTextLinkClick}>Change</TextLink>
                  <CurrentTemp temperature={temperature} />
                  <div class="color-divider"></div>
              </div>
          </div>
      </>
  );
};

export default CurrentWeather;