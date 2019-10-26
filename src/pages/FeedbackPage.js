import React from 'react';
import Link from '../components/atoms/Link';
import WeatherBio from '../components/molecules/WeatherBio';
import FeedbackForm from '../components/organisms/FeedbackForm';
import PageTemplate from '../components/templates/PageTemplate';
import { CURRENT_WEATHER } from '../data/mockWeather';

const FeedbackPage = () => {
  return (
    <PageTemplate
      city={CURRENT_WEATHER.name}
      temperature={CURRENT_WEATHER.main.temp}
      changeCity={() => console.log('Change the city!')}
    >
      <Link>I changed my mind!</Link>
      <WeatherBio />
      <FeedbackForm />
    </PageTemplate>
  );
};

export default FeedbackPage;