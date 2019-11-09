import React, { Fragment, useState } from 'react';
import { chunkify } from '../../utils';
import DailyWeather from '../molecules/DailyWeather';
import PropTypes from 'prop-types';
import './Forecasting.css';


const Forecasting = ({ forecast, ...props }) => {
    // Take forecast and split into equal chunks for each day.
    const chunkedForecast = chunkify(forecast, forecast.length / 5);
  
    // Get highest temp from forecast chunk
    const getMaxTemp = array =>
      array.reduce((acc, cur) => (acc.main.temp > cur.main.temp ? acc : cur));
    // Get lowest temp from forecast chunk
    const getMinTemp = array =>
      array.reduce((acc, cur) => (acc.main.temp < cur.main.temp ? acc : cur));

    const [showHourly, setShowHourly] = useState(0);
  
    return (
      <div class="Forecast">
        {chunkedForecast.map((day, i) => (
          <Fragment key={i}>
            {i === 0 && <h3>Today:</h3>}
            {i === 1 && <h3>Upcoming:</h3>}
            <DailyWeather
              key={day[0].dt}
              day={day[0].dt_txt}
              icon={day[0].weather[0].icon}
              maxTemp={`${parseInt(getMaxTemp(day).main.temp)}`}
              minTemp={`${parseInt(getMinTemp(day).main.temp)}`}
              list={day}
              onDailyClick={() => setShowHourly(i)}
              showHourly={showHourly === i}
            />
          </Fragment>
        ))}
      </div>
    );
  };

Forecasting.propTypes = {
  forecast:PropTypes.arrayOf(PropTypes.shape({
    dt: PropTypes.number.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired

 } 
export default Forecasting;