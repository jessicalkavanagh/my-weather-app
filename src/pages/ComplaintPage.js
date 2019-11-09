import React from 'react';
import { Link } from 'react-router-dom';
import TextLink from '../components/atoms/TextLink';
import WeatherBio from '../components/molecules/WeatherBio';
import ComplaintForm from '../components/organisms/ComplaintForm';
import PageTemplate from '../components/templates/PageTemplate';


const ComplaintPage = ({firstname, lastname, bio, city, temperature, changeCity, ...props}) => {
  return (
      <div>
          <PageTemplate city={city} temperature={temperature} changeCity={changeCity} />
          <Link to="/"><TextLink linkType="regretlink">Opps, take me back!</TextLink></Link>
          <WeatherBio firstname="Clive" lastname="Weathers" bio="Here is the Weather Person's bio" avatar="/images/Weather-man.jpg"/>
          <h3>Make a Complaint</h3>
          <ComplaintForm />
      </div>
  )
}

export default ComplaintPage;