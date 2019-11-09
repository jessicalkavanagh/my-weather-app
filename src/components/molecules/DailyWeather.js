import React from 'react';
import Symbol from '../atoms/Symbol';
import HourlyWeather from './HourlyWeather';
import moment from 'moment';
import './DailyWeather.css';


const DailyWeather = ({day, icon,list, maxTemp, minTemp, onDailyClick,showHourly, ...props}) => {
  return (
      <>
          <div class="DWblock" onClick={onDailyClick}>
              <h3 class="DWtitle">{moment(day).format('dddd')}</h3>
                  <div class="DWtempblock">
                      <div class="DWicon"><Symbol icon={icon}/></div>
                      <div class="DWmaxmin">{maxTemp}<sup>º</sup></div>
                      <div class="DWmaxmin">{minTemp}<sup>º</sup></div>
                  </div>
          </div>
          {showHourly && <HourlyWeather list={list} />}
      </>
  )
}

export default DailyWeather;