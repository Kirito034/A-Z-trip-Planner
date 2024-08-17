import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, TextField, Button, Container } from '@mui/material';
import { Card, CardContent, CardMedia } from '@mui/material';



export default function SearchForm() {

    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [budget, setBudget] = useState(null)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/filteredoptionscard', { state: { source, destination, date, budget } });
    };


    return (
        <Container >
 <Typography level="h2">Fill Detail of your trip</Typography>
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <TextField
            label="Source"
            variant="outlined"
            fullWidth
            value={source}
            onChange={(e) => setSource(e.target.value)}
            sx={{ mb: 2 }}
        />
                <TextField
                    label="Destination"
                    variant="outlined"
                    fullWidth
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Date"
                    type="date"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <TextField
                    variant="outlined"
                    label="Budget"
                    value={budget}
                    onChange={(e) => { setBudget(e.target.value) }}
                /> <br /> <br />
                <Button type="submit" variant="contained" color="primary" >
                    Search Options
                </Button>
            </Box>

            <Box
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '2px solid grey' }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} >
                        <Card sx={{ maxWidth: 345, bgcolor: '#e0f7fa' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'darkblue' }}>
                                    20% OFF
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    "30% OFF address"
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Price per Night: "₹25000"
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Rating: "4.3"
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Room Types: "AC"
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <a href="#" target="_blank" rel="noopener noreferrer">Visit Website</a>
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="success"
                                    sx={{ mt: 2 }}
                                >
                                    View More
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Card sx={{ maxWidth: 345, bgcolor: '#e0f7fa' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'darkblue' }}>
                                    "25% OFF "
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    "30% OFF address"
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Price per Night: "₹35000"
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Rating: "4.5"
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Room Types: "AC/Non AC"
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <a href="#" target="_blank" rel="noopener noreferrer">Visit Website</a>
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="success"
                                    sx={{ mt: 2 }}
                                >
                                    View More
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Card sx={{ maxWidth: 345, bgcolor: '#e0f7fa' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'darkblue' }}>
                                    "30% OFF "
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    "30% OFF address"
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Price per Night: "₹27000"
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Rating: "4.5"
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Room Types: "AC"
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <a href="#" target="_blank" rel="noopener noreferrer">Visit Website</a>
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="success"
                                    sx={{ mt: 2 }}
                                >
                                    View More
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
