import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Grid, Divider } from '@mui/material';
import axios from 'axios'
// const accommodations = [
//   {
//     "name": "Taj Mahal Palace",
//     "address": {
//       "street": "Apollo Bandar, Colaba",
//       "city": "Mumbai",
//       "state": "Maharashtra",
//       "postalCode": "400001",
//       "country": "India"
//     },
//     "phoneNumber": "+91-22-6665-3366",
//     "email": "reservations.mumbai@tajhotels.com",
//     "website": "https://www.tajhotels.com/en-in/taj/taj-mahal-palace-mumbai/",
//     "amenities": ["Free Wi-Fi", "Swimming Pool", "Spa", "Gym", "Restaurant"],
//     "roomTypes": ["Deluxe Room", "Luxury Suite", "Sea View Room"],
//     "pricePerNight": 15000,
//     "rating": 4.8,
//     "reviews": [
//       {
//         "user": "60b8d295bcf86cd799439011",
//         "comment": "Excellent service and beautiful views!",
//         "rating": 5,
//         "date": "2024-05-20T18:25:43.511Z"
//       },
//       {
//         "user": "60b8d295bcf86cd799439012",
//         "comment": "Loved the ambiance and hospitality.",
//         "rating": 4.5,
//         "date": "2024-05-18T14:17:24.123Z"
//       }
//     ]
//   },
//   {
//     "name": "The Leela Palace",
//     "address": {
//       "street": "Diplomatic Enclave, Chanakyapuri",
//       "city": "New Delhi",
//       "state": "Delhi",
//       "postalCode": "110023",
//       "country": "India"
//     },
//     "phoneNumber": "+91-11-3933-1234",
//     "email": "reservations.newdelhi@theleela.com",
//     "website": "https://www.theleela.com/en_us/hotels-in-delhi/the-leela-palace-hotel-new-delhi/",
//     "amenities": ["Free Wi-Fi", "Rooftop Pool", "Spa", "Gym", "Restaurant"],
//     "roomTypes": ["Premier Room", "Royal Suite", "Garden View Room"],
//     "pricePerNight": 18000,
//     "rating": 4.7,
//     "reviews": [
//       {
//         "user": "60b8d295bcf86cd799439013",
//         "comment": "Luxurious experience and great food.",
//         "rating": 4.9,
//         "date": "2024-05-22T10:20:30.456Z"
//       },
//       {
//         "user": "60b8d295bcf86cd799439014",
//         "comment": "Perfect location and excellent amenities.",
//         "rating": 4.6,
//         "date": "2024-05-19T16:35:48.789Z"
//       }
//     ]
//   }
// ];



const NewCard = () => {
    const [accommodations, setaccommodations] = useState([])
    const fetchAccommodation = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/hotel/")
            if (res) {
                setaccommodations(res.data)
                console.log(res)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchAccommodation();
    }, [])


    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Typography variant="h3" component="h1" gutterBottom>
                Accommodations Details
            </Typography>

            <Divider sx={{ my: 3 }} />
            <Grid container spacing={3}>
                {accommodations.map((accommodation, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: 345, bgcolor: '#e0f7fa' }}>
                            
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'darkblue' }}>
                                    {accommodation.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {`${accommodation.address.street}, ${accommodation.address.city}, ${accommodation.address.state}, ${accommodation.address.postalCode}, ${accommodation.address.country}`}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Price per Night: ₹{accommodation.pricePerNight}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Rating: {accommodation.rating}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Amenities: {accommodation.amenities.join(', ')}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Room Types: {accommodation.roomTypes.join(', ')}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <a href={accommodation.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default NewCard;
