import React from 'react';
import Bio from '../atoms/Bio';
import BioImage from '../atoms/BioImage';

const WeatherBio = ({firstname, lastname, bio, avatar, ...props}) => {
  return (
      <div>
          <BioImage avatar={avatar}/>
          <Bio/>
      </div>
  )
}
export default WeatherBio;