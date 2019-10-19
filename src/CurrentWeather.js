import React from 'react';

const CurrentWeather = ({country,city,temperature, ...props }) => {
    return (
        <div>
            <div>{country}</div>
            <div>{city}</div>
            <div>{temperature}</div>
        </div>
    );
};

export default CurrentWeather;