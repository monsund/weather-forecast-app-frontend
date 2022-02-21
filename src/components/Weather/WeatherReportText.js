import React from 'react';
import moment from 'moment';

import './WeatherReportTextStyles.css'

const WeatherReportText = ({cityName, date, weather}) => {
  return (
    <div className="weatherReportText">
        <h1>{cityName.toUpperCase()}'s</h1>
        <h2>weather is forecasted to be </h2>
        <h1>"{weather.IconPhrase}"</h1>
        <h2>on {moment(Number(date)).format('LL')}</h2>
    </div>
  )
}

export default WeatherReportText