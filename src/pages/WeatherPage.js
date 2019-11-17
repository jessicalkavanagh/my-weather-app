import React from 'react';
import { Link } from 'react-router-dom';
import TextLink from '../components/atoms/TextLink';
import Forecasting from '../components/organisms/Forecasting';
import PageTemplate from '../components/templates/PageTemplate';


const WeatherPage = ({ city, temperature, changeCity, forecast, ...props }) => {
  return (
    <PageTemplate city={city} temperature={temperature} changeCity={changeCity}>
      <Forecasting forecast={forecast} />
      <h3>Don't like the weather?</h3>
      <Link to="/complain">
        <TextLink linkType="complaintlink">Complain to the weather person!</TextLink>
      </Link>
    </PageTemplate>
  );
};

export default WeatherPage;