import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Box, Grid, Button, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';

const FilteredOptionsCard = () => {
  const [Accommo, setAccommo] = useState([]);
  const [Travel, setTravel] = useState([]);
  const { state } = useLocation();
  const { source, destination, date, budget } = state || {};
  const navigate = useNavigate();

  const [selectedTransportation, setSelectedTransportation] = useState(null);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);

  const totalCost = (selectedTransportation?.price || 0) + (selectedAccommodation?.pricePerNight || 0);

  useEffect(() => {
    const getData = async () => {
      try {
        const travelRes = await axios.get('http://localhost:4000/api/traveling/');
        setTravel(travelRes.data);
  
        const hotelRes = await axios.get('http://localhost:4000/api/hotel/');
        console.log('Hotel Data:', hotelRes.data); // Log the response
  
        // Check if hotelRes.data contains 'allHotel' key and set the state accordingly
        if (Array.isArray(hotelRes.data.allHotel)) {
          setAccommo(hotelRes.data.allHotel);
        } else {
          console.error('Unexpected data format for accommodations:', hotelRes.data);
          setAccommo([]); // Default to an empty array if data format is incorrect
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setAccommo([]); // Default to an empty array on error
      }
    };
  
    getData();
  }, []);
  

  const filteredTransportations = Travel.filter((trans) => {
    const departureLocation = trans.departure?.location?.toLowerCase() || '';
    const arrivalLocation = trans.arrival?.location?.toLowerCase() || '';
    return departureLocation.includes(source?.toLowerCase()) && arrivalLocation.includes(destination?.toLowerCase());
  });

  const filteredAccommodations = Array.isArray(Accommo)
    ? Accommo.filter((acc) => {
        const city = acc.address?.city?.toLowerCase() || '';
        return city.includes(destination?.toLowerCase());
      })
    : [];

  return (
    <Box sx={{ display: 'flex', flexGrow: 1, padding: 2 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Available Transportations
        </Typography>
        <Grid container spacing={3}>
          {filteredTransportations.length > 0 ? (
            filteredTransportations
              .filter((item) => budget === null || item.price <= budget)
              .map((transportation, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ maxWidth: 345, bgcolor: 'lightgreen', borderRadius: 2 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{ color: 'darkgreen' }}>
                        {transportation.type} - {transportation.provider}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Departure: {transportation.departure?.location}
                        <br />
                        Date: {transportation.departure?.dateTime}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Arrival: {transportation.arrival?.location}
                        <br />
                        Date: {transportation.arrival?.dateTime}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Price: ₹{transportation.price}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setSelectedTransportation(transportation)}
                        sx={{ mt: 2 }}
                      >
                        Select Transportation
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))
          ) : (
            <Typography variant="h6" component="div" sx={{ mt: 2 }}>
              No transportations available for the selected route and date.
            </Typography>
          )}
        </Grid>

        <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
          Available Accommodations
        </Typography>
        <Grid container spacing={3}>
          {filteredAccommodations.length > 0 ? (
            filteredAccommodations
              .filter((item) => budget === null || item.pricePerNight <= budget)
              .map((accommodation, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ maxWidth: 345, bgcolor: 'lightblue', borderRadius: 2 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{ color: 'darkblue' }}>
                        {accommodation.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Price per Night: ₹{accommodation.pricePerNight}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Address: {accommodation.address?.street}, {accommodation.address?.city}, {accommodation.address?.state}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setSelectedAccommodation(accommodation)}
                        sx={{ mt: 2 }}
                      >
                        Select Accommodation
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))
          ) : (
            <Typography variant="h6" component="div" sx={{ mt: 2 }}>
              No accommodations available at the destination.
            </Typography>
          )}
        </Grid>
      </Box>

      <Drawer
        anchor="right"
        variant="permanent"
        sx={{
          width: 300,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 300, boxSizing: 'border-box' },
        }}
      >
        <Typography variant="h6" component="div" sx={{ p: 2 }}>
          Selected Options
        </Typography>
        <Divider />
        <List>
          {selectedTransportation && (
            <ListItem>
              <ListItemText
                primary={`${selectedTransportation.type} - ${selectedTransportation.provider}`}
                secondary={`Price: ₹${selectedTransportation.price}`}
              />
            </ListItem>
          )}
          {selectedAccommodation && (
            <ListItem>
              <ListItemText
                primary={selectedAccommodation.name}
                secondary={`Price per Night: ₹${selectedAccommodation.pricePerNight}`}
              />
            </ListItem>
          )}
          <Divider />
          <ListItem>
            <ListItemText primary="Total Cost" secondary={`₹${totalCost}`} />
          </ListItem>
        </List>
        <Box sx={{ p: 2 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => navigate('/makepayment', { state: { totalCost, selectedAccommodation, selectedTransportation } })}
          >
            Proceed to Payment
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default FilteredOptionsCard;
