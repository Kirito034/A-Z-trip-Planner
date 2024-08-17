import React, { useState } from 'react';
import { Typography, Box, Button, TextField, Container } from '@mui/material';

const Payment = ({ totalPrice, transportationsPrice }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [processing, setProcessing] = useState(false);


  const handlePayment = () => {
    // Simulate payment processing
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      alert('Payment successful!');
    }, 2000);
  };

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Payment
        </Typography>

        <Typography variant="h6" gutterBottom>
          Total Amount: ₹{totalPrice}
        </Typography>

        <TextField
          fullWidth
          label="Payment Method"
          variant="outlined"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Card Number"
          variant="outlined"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Expiry Date"
          variant="outlined"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="CVV"
          variant="outlined"
          type="password"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Button
          variant="contained"
          color="primary"
          disabled={processing || !paymentMethod || !cardNumber || !expiryDate || !cvv}
          onClick={handlePayment}
        >
          {processing ? 'Processing...' : 'Make Payment'}
        </Button>
      </Box>
    </Container>
  );
};

export default Payment;
