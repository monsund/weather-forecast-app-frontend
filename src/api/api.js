import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' })
export const fetchAllCities = () => API.get(`/cities`);

export const fetchCitiesBySearch = (searchQuery) => API.get(`/cities/search?searchedCity=${searchQuery}`);

export const fetchWeatherForecast = (date, cityKey) => API.get(`/weather?date=${date}&cityKey=${cityKey}`)

