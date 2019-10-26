import React from 'react';
import { Link } from 'react-router-dom';
import TextLink from '../components/atoms/TextLink';
import WeatherBio from '../components/molecules/WeatherBio';
import FeedbackForm from '../components/organisms/FeedbackForm';
import PageTemplate from '../components/templates/PageTemplate';

const ComplaintPage = ({ city, temperature, changeCity, ...props }) => {
  return (
    <PageTemplate city={city} temperature={temperature} changeCity={changeCity}>
      <Link to="/">
        <TextLink>I changed my mind!</TextLink>
      </Link>
      <WeatherBio />
      <FeedbackForm />
    </PageTemplate>
  );
};

export default ComplaintPage;