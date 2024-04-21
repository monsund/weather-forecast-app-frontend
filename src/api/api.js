import axios from 'axios';

// const API = axios.create({ baseURL: 'http://localhost:7000' })
const API = axios.create({ baseURL: 'https://world-city-weather-forecast.herokuapp.com' })
export const fetchAllCities = () => API.get(`/cities`);

export const fetchCitiesBySearch = (searchQuery) => API.get(`/cities/search?searchedCity=${searchQuery}`);

export const fetchWeatherForecast = (date, cityKey) => API.get(`/weather?date=${date}&cityKey=${cityKey}`)

