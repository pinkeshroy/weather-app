import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Header from './components/Header.jsx';
import Weather from './components/WeatherDashboard/index.jsx';
import PostList from './components/PostList.jsx';

function App() {
  return (
    <>
      <Header />
      <Container sx={{ mt: 5, mb: 5 }}>
        <Box mb={6}>
          <Typography variant="h4" mb={3}>Weather Info</Typography>
          <Weather />
        </Box>

        <Box>
        <Typography variant="h4" mb={3} sx={{ fontWeight: 500 }}>
          Latest Posts
        </Typography>
          <PostList />
        </Box>
      </Container>
    </>
  );
}

export default App;
