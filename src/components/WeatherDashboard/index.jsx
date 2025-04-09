import React, { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Alert,
  AlertTitle,
} from "@mui/material";
import SearchBar from "./SearchBar";
import WeatherDetailsCard from "./Weather.jsx";
import ForecastGrid from "./ForecastGrid.jsx";
import HourlyForecastGrid from "./HourlyForecastGrid.jsx";
import { fetchCitySuggestions, fetchWeatherData } from "../../api/api";

const WeatherDashboard = () => {
  const [city, setCity] = useState("Mumbai");
  const [suggestions, setSuggestions] = useState([]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState("");
  const isMobile = useMediaQuery("(max-width:600px)");

  const fetchWeather = async (selectedCity = city) => {
    try {
      setLoading(true);
      const data = await fetchWeatherData(selectedCity);
      setWeather(data);
      setError("");
    } catch (err) {
      setError("City not found");
    } finally {
      setLoading(false);
    }
  };

  const fetchSuggestions = async (query) => {
    if (!query) return;
    try {
      setSearchLoading(true);
      const data = await fetchCitySuggestions(query);
      setSuggestions(data);
    } catch (err) {
      setSuggestions([]);
    } finally {
      setSearchLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <Box
      sx={{
        p: isMobile ? 2 : 4,
        color: "#0000",
      }}
    >
      <SearchBar
        city={city}
        setCity={setCity}
        fetchWeather={fetchWeather}
        fetchSuggestions={fetchSuggestions}
        suggestions={suggestions}
        loading={searchLoading}
        isMobile={isMobile}
      />

      {loading && <CircularProgress />}
      {error && (
        <Alert
          severity="error"
          variant="outlined"
          sx={{
            mt: 2,
            mb:3,
            borderRadius: 2,
            borderColor: "#fbc6c6",
            bgcolor: "#fdecea",
            color: "#B71C1C",
          }}
        >
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      )}

      {weather && (
        <>
          <WeatherDetailsCard weather={weather} />
          <ForecastGrid forecast={weather.forecast.forecastday} />
          <HourlyForecastGrid hours={weather.forecast.forecastday[0].hour} />
        </>
      )}
    </Box>
  );
};

export default WeatherDashboard;
