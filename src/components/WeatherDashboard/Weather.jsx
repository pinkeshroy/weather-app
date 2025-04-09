import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

import ThermostatIcon from "@mui/icons-material/Thermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import CompressIcon from "@mui/icons-material/Compress";
import AirIcon from "@mui/icons-material/Air";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "../../styles/App.css";
const WeatherOverview = ({ weather }) => {
  return (
    <Grid container spacing={3}>
      {/* Current Weather */}
      <Grid item xs={12} md={4}>
        <Card
          className="card-custom"
          sx={{
            height: "100%",
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography variant="h6">{weather.location.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {weather.location.country}
            </Typography>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={2}
            >
              <Box>
                <Typography variant="h2" fontWeight="bold">
                  {weather.current.temp_c}°C
                </Typography>
                <Typography>{weather.current.condition.text}</Typography>
              </Box>
              <img src={weather.current.condition.icon} alt="icon" />
            </Box>

            <Typography variant="body2" mt={2} color="text.secondary">
              {weather.location.localtime}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Feels Like / Humidity / Pressure */}
      <Grid item xs={12} md={4}>
        <Card
          className="card-custom"
          sx={{
            pr: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography sx={{ m: 2 }}>
              <ThermostatIcon fontSize="small" sx={{ mr: 1 }} />
              Feels Like <b>{weather.current.feelslike_c}°C</b>
            </Typography>
            <Typography sx={{ m: 2 }}>
              <OpacityIcon fontSize="small" sx={{ mr: 1 }} />
              Humidity <b>{weather.current.humidity}%</b>
            </Typography>
            <Typography sx={{ m: 2 }}>
              <CompressIcon fontSize="small" sx={{ mr: 1 }} />
              Pressure <b>{weather.current.pressure_mb} hPa</b>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Wind / Visibility / UV */}
      <Grid item xs={12} md={4}>
        <Card
          className="card-custom"
          sx={{
            pr: 4,
            pl: 4,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <Typography sx={{ m: 2 }}>
              <AirIcon fontSize="small" sx={{ mr: 1 }} />
              Wind <b>{weather.current.wind_kph} km/h</b>
            </Typography>
            <Typography sx={{ m: 2 }}>
              <VisibilityIcon fontSize="small" sx={{ mr: 1 }} />
              Visibility <b>{weather.current.vis_km} km</b>
            </Typography>
            <Typography sx={{ m: 2 }}>
              <WbSunnyIcon fontSize="small" sx={{ mr: 1 }} />
              UV Index <b>{weather.current.uv}</b>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default WeatherOverview;
