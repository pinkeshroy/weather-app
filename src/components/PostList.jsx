import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Alert,
  Box,
  Container,
} from '@mui/material';
import Loader from './Loader.jsx';
import "../styles/App.css"
const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setPosts(res.data.slice(0, 10)))
      .catch(() => setError('Failed to load posts'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid 
              item 
              xs={12}   // Mobile: full width (1 card per row)
              sm={6}    // Tablet: half width (2 cards per row)
              md={4}    // Desktop: one-third width (3 cards per row)
              key={post.id}
            >
              <Card className='card-custom'>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ color: '#242424' }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555' }}>
                    {post.body}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default PostList;
