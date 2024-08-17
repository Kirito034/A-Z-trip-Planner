import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: 'purple' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
          <Button
            component={Link}
            to=""
            sx={{ color: 'white' }}
          >
            A to Z Trip Planner
          </Button>

        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to="/hotel"
            sx={{ color: 'white', bgcolor: 'blue', '&:hover': { bgcolor: 'darkblue' } }}
          >
            Hotel
          </Button>
          <Button
            component={Link}
            to="/travel"
            sx={{ color: 'white', bgcolor: 'green', '&:hover': { bgcolor: 'darkgreen' } }}
          >
            Travel
          </Button>
          <Button
            component={Link}
            to="/select-option"
            sx={{ color: 'white', bgcolor: 'orange', '&:hover': { bgcolor: 'darkorange' } }}
          >
            Select Option
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
