import React from 'react';
import { Link } from 'react-router-dom';
import TextLink from '../components/atoms/TextLink';
import Forecasting from '../components/organisms/Forecasting';
import PageTemplate from '../components/templates/PageTemplate';

const WeatherPage = ({ city, temperature, changeCity, forecast, ...props }) => {
  return (
    <PageTemplate city={city} temperature={temperature} changeCity={changeCity}>
      <Forecasting forecast={forecast} />;
      <Link to="/complain">
        <TextLink>Complain about the weather!</TextLink>
      </Link>
    </PageTemplate>
  );
};

export default WeatherPage;