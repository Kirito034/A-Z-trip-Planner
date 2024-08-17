import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Grid, Button, Container, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import Payment from './Payment';
import { useNavigate } from 'react-router-dom';
const accommodations = [
    {
        name: "Taj Mahal Palace",
        pricePerNight: 15000
    },
    {
        name: "The Leela Palace",
        pricePerNight: 18000
    }
];

const transportations = [
    {
        type: "Flight",
        provider: "Air India",
        price: 5000
    },
    {
        type: "Train",
        provider: "Indian Railways",
        price: 2500
    },
    {
        type: "Bus",
        provider: "RedBus",
        price: 500
    }
];

const SelectOptions = () => {


    const [selectedAccommodation, setSelectedAccommodation] = useState('');
    const [selectedTransportation, setSelectedTransportation] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [showPayment, setShowPayment] = useState(false); // State to control Payment component rendering

    const handleAccommodationChange = (event) => {
        const accommodation = accommodations.find(acc => acc.name === event.target.value);
        setSelectedAccommodation(accommodation);
        calculateTotalPrice(accommodation, selectedTransportation);
    };

    const handleTransportationChange = (event) => {
        const transportation = transportations.find(trans => trans.provider === event.target.value);
        setSelectedTransportation(transportation);
        calculateTotalPrice(selectedAccommodation, transportation);
    };

    const calculateTotalPrice = (accommodation, transportation) => {
        const accPrice = accommodation ? accommodation.pricePerNight : 0;
        const transPrice = transportation ? transportation.price : 0;
        setTotalPrice(accPrice + transPrice);
    };

    const handleProceedToPayment = () => {
        setShowPayment(true);// Show the Payment component
    };

    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Select Your Options
                </Typography>

                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Accommodation</InputLabel>
                    <Select
                        value={selectedAccommodation.name || ''}
                        onChange={handleAccommodationChange}
                        label="Accommodation"
                    >
                        {accommodations.map((accommodation, index) => (
                            <MenuItem key={index} value={accommodation.name}>
                                {accommodation.name} - ₹{accommodation.pricePerNight}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Transportation</InputLabel>
                    <Select
                        value={selectedTransportation.provider || ''}
                        onChange={handleTransportationChange}
                        label="Transportation"
                    >
                        {transportations.map((transportation, index) => (
                            <MenuItem key={index} value={transportation.provider}>
                                {transportation.type} by {transportation.provider} - ₹{transportation.price}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="h6">Selected Accommodation: {selectedAccommodation.name || 'None'}</Typography>
                    <Typography variant="h6">Selected Transportation: {selectedTransportation.provider || 'None'}</Typography>
                    <Typography variant="h5" sx={{ mt: 2, color: 'green' }}>Total Price: ₹{totalPrice}</Typography>
                </Box>
                <Button variant="contained" color="primary" onClick={handleProceedToPayment}>
                    Proceed to Payment
                </Button>

                {/* Render Payment component if showPayment is true */}
                {
                    showPayment && <Payment totalPrice={totalPrice} transportationsPrice={selectedTransportation.price} />
                    // :<Typography>Click to Proceed</Typography>}
                }
            </Box>
        </Container>
    );
};

export default SelectOptions;
