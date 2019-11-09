import React from 'react';
import './CurrentTemp.css';

const CurrentTemp = ({ temperature, ...props }) => {
  return (
    <div className="CurrentTemperature">{temperature}<sup>º</sup></div>
)
}


export default CurrentTemp;