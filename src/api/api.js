import axios from "axios";
import { WEATHER_API_KEY } from "../config.js";

// Fetch weather data for a city
export const fetchWeatherData = async (city) => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=7&aqi=no&alerts=no`;
  const response = await axios.get(url);
  return response.data;
};

// Fetch city search suggestions
export const fetchCitySuggestions = async (query) => {
  const url = `https://api.weatherapi.com/v1/search.json?key=${WEATHER_API_KEY}&q=${query}`;
  const response = await axios.get(url);
  return response.data;
};
