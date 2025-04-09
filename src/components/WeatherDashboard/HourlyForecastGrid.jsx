import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

const formatTime = (str) =>
  new Date(str).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

const HourlyForecastGrid = ({ hours }) => {
  return (
    <Box mt={5}>
      <Typography variant="h6" mb={2} sx={{ color: "#242424" }}>
        Hourly Rain Forecast (Today)
      </Typography>

      <Grid container spacing={2}>
        {hours.slice(8, 20).map((h, i) => (
          <Grid key={i} item xs={3} sm={2} md={1.5}>
            <Card
              className="glass-card"
              sx={{
                textAlign: "center",
                transition: "0.3s",
                "&:hover": {
                  boxShadow: 6,
                  transform: "translateY(-4px)",
                },
                borderRadius: 2,
                height: "100%",
                backgroundColor: "#fafafa",
              }}
            >
              <CardContent>
                <Typography variant="body2">{formatTime(h.time)}</Typography>
                <img src={h.condition.icon} alt="icon" width="36" />
                <Typography variant="body2">{h.temp_c}°C</Typography>
                <Typography variant="caption" color="skyblue">
                  {h.chance_of_rain}% rain
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HourlyForecastGrid;
