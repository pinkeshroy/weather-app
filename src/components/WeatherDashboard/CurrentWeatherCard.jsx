import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";

const CurrentWeatherCard = ({ weather }) => {

  return <Grid container spacing={3}>
    <Grid item xs={12} md={4}>
      <Card sx={{ height: "100%" }}>
        <CardContent>
          <Typography variant="h6">{weather.location.name}</Typography>
          <Typography variant="body2" color="lightgray">
            {weather.location.country}
          </Typography>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Box>
              <Typography variant="h2" fontWeight="bold">
                {weather.current.temp_c}°C
              </Typography>
              <Typography>{weather.current.condition.text}</Typography>
            </Box>
            <img src={weather.current.condition.icon} alt="icon" />
          </Box>
          <Typography variant="body2" mt={2} color="lightgray">
            {weather.location.localtime}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
};

export default CurrentWeatherCard;
