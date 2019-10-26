import React from 'react';
import Link from '../components/atoms/Link';
import Forecasting from '../components/organisms/Forecasting';
import PageTemplate from '../components/templates/PageTemplate';
import { CURRENT_WEATHER, HOURLY_FORECAST } from '../data/mockWeather';

const WeatherPage = () => {
  return (
    <PageTemplate
      city={CURRENT_WEATHER.name}
      temperature={CURRENT_WEATHER.main.temp}
      changeCity={() => console.log('Change the city!')}
    >
      <Forecasting forecast={HOURLY_FORECAST} />
      <Link>Complain about the weather!</Link>
    </PageTemplate>
  );
};

export default WeatherPage;