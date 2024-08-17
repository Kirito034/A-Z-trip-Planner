import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, TextField, Container, Box, Button } from '@mui/material';
import Payment from './Payment';


const Makepayment = () => {
  const { state } = useLocation();
  var { totalCost, selectedAccommodation, selectedTransportation } = state;

  const [numberofCandidate, setNumberofCandidate] = useState()

  const [showPayment, setShowPayment] = useState(null); // State to control Payment component rendering
  const [newtotal, setNewTotal] = useState(false)

  const handleProceedToPayment = () => {
    setShowPayment(true);// Show the Payment component
    console.log(setShowPayment)
  };

  useEffect(() => {
    setShowPayment(false);
    console.log(showPayment)
  }, [])

  const newTotal = (e) => {
    console.log(e.target.value)
    setNewTotal(selectedAccommodation.pricePerNight + (selectedTransportation.price * e.target.value))
  }

  
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Payment
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          Accommodation Details: <br />
          {
            selectedAccommodation ? (
              <Typography variant="h6" component="div" gutterBottom>
                {selectedAccommodation.name} -
                {selectedAccommodation.address.street}, {selectedAccommodation.address.city}, {selectedAccommodation.address.state}
                <br />
                Accommodation Cost - ₹{selectedAccommodation.pricePerNight}
              </Typography>
            ) :
              (
                <Typography variant="h6" component="div" gutterBottom>
                  No accommodation selected
                </Typography>
              )
          }
        </Typography>
        <br />
        <Typography variant="h5" component="div" gutterBottom>
          Transportation Details: <br />
          {
            selectedTransportation ? (
              <Typography variant="h6" component="div" gutterBottom>
                {selectedTransportation.type} - {selectedTransportation.provider}
                <br />
                Departure - {selectedTransportation.departure.location} 
                <br />
                Price - {selectedTransportation.price} per person
                <br />
                <TextField
                  label="Number of Candidate"
                  variant="outlined"
                  value={numberofCandidate}
                  onChange={(e)=>(newTotal(e))}
                  sx={{ mb: 2, mt: 2 }}
                />
              </Typography>
              ) : (
              <Typography variant="h6" component="div" gutterBottom>
                No transportation selected
              </Typography>)
          }
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          Total Cost: ₹{newtotal? newtotal : "0"}
        </Typography>
        {/* <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleProceedToPayment}>
          Proceed with Payment
        </Button> */}
        <Button variant="contained" color="primary" onClick={handleProceedToPayment}>
          Proceed to Payment
        </Button>
      </Box>
      {
        showPayment && <Payment totalPrice={newtotal} transportationsPrice={selectedTransportation ? selectedTransportation.price : 0} />
      }
    </Container>
  );
};

export default Makepayment;
