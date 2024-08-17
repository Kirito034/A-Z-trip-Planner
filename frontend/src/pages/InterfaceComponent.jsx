import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import NewCard from './NewCard';
import TravelCard from './TravelCard';

const InterfaceComponent = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Travel Details
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h4" component="h2" gutterBottom>
          Accommodations
        </Typography>
        <NewCard />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h4" component="h2" gutterBottom>
          Transportations
        </Typography>
        <TravelCard />
      </Box>
    </Container>
  );
};

export default InterfaceComponent;
