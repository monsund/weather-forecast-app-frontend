import React, { useState, useEffect } from 'react'
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

import CitySearchDropdown from '../CitySearchDropdown/CitySearchDropdown';
import DateSelect from '../DateSelect/DateSelect';
import WeatherTable from '../Weather/WeatherTable';
import WeatherImage from '../Weather/WeatherImage';
import WeatherReportText from '../Weather/WeatherReportText';

import { fetchWeatherForecast } from '../../api/api';
import './homeStyles.css';


const Home = () => {
  const [cityKey, setCityKey] = useState('');
  const [cityName, setCityName] = useState('');
  const [date, setDate] = useState(null);
  const [weather, setWeather] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetchWeatherForecast(date, cityKey)
        console.log(date, cityKey)
        setWeather(response.data.data.dayData)
      } catch (error) {
        setWeather({})
        setErrorMessage("Unknown error or Seems like accu weather api request limit is reached.")
        console.log('fetchWeatherForcast api not working: ', errorMessage)
      }
    }

    fetchWeather()
    setErrorMessage(null)
  }, [date])

  useEffect(() => {
    setDate(null)
  }, [cityKey])

  return (
    <div className="container">
      <CitySearchDropdown cityKey={cityKey} setCityKey={setCityKey} setCityName={setCityName} />

      {
        cityKey && (
          <>
            <h2>Select the date to see the weather forecast</h2>
            <DateSelect date={date} setDate={setDate} />
          </>
        )
      }
      {date && (errorMessage ? <h1>{errorMessage}</h1> :
        <div className="weather">
          {date && <WeatherImage className="col-lg-8" weather={weather} />}
          <div className="weather-report-table">
            {date && <WeatherTable weather={weather} />}
            {date && <WeatherReportText cityName={cityName} date={date} weather={weather} />}
          </div>

        </div>
      )}


    </div>

  )
}

export default Home