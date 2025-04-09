import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

const formatDate = (str) =>
  new Date(str).toLocaleDateString([], { weekday: "short", day: "numeric" });

const ForecastGrid = ({ forecast }) => {
  return (
    <Box mt={5}>
      <Typography variant="h6" mb={2} sx={{ color: "#242424" }}>
        Next 7 Days
      </Typography>
      <Grid container spacing={2}>
        {forecast.map((day, i) => (
          <Grid key={i} item xs={6} sm={4} md={1.7}>
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
                <Typography variant="body2" color="grey">
                  {formatDate(day.date)}
                </Typography>
                <img src={day.day.condition.icon} alt="icon" />
                <Typography variant="h6" fontWeight="bold">
                  {day.day.avgtemp_c}°C
                </Typography>
                <Typography variant="body2">
                  {day.day.condition.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ForecastGrid;
