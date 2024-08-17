import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Box, Grid, Button } from '@mui/material';

const TravelCard = () => {
  const [transportations, setTransportations] = useState([]);

  const fetchTransportations = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/traveling/');
      if (res && res.data) {
        setTransportations(res.data);
        console.log(res.data);
      }
    } catch (error) {
      console.log('Failed to fetch transportations:', error);
    }
  };

  useEffect(() => {
    fetchTransportations();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Transportations Details
      </Typography>

      <Grid container spacing={3}>
        {transportations.length > 0 ? (
          transportations.map((transportation, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345, bgcolor: '#e0f2f1' }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {transportation.type} - {transportation.provider}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Departure: {transportation.departure.location} at{' '}
                    {new Date(transportation.departure.dateTime).toLocaleString()}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Arrival: {transportation.arrival.location} at{' '}
                    {new Date(transportation.arrival.dateTime).toLocaleString()}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ₹{transportation.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Duration: {Math.floor(transportation.duration / 60)}h{' '}
                    {transportation.duration % 60}m
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Contact: {transportation.contactInfo.phoneNumber}, <a href={`mailto:${transportation.contactInfo.email}`}>{transportation.contactInfo.email}</a>
                  </Typography>
                  <Button variant="contained" color="success">
                    Select
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" component="div" sx={{ mt: 2 }}>
            No transportations available.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default TravelCard;
