import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Header = () => (
  <AppBar position="static">
    <Toolbar sx={{ gap: 1 }}>
      <WbSunnyIcon fontSize="large" />
      <Typography variant="h6" component="div">
        Weather App
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
