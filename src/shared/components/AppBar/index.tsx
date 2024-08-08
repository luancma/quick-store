import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function AppBarComponent() {
  return (
    <Box sx={{ flexGrow: 1  }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Quick Store
          </Typography>

          <Box sx={{ flexGrow: 1, margin: "0 16px" , display: { xs: 'none', md: 'flex' } }}>
            {['HOMEPAGE', 'PROMOTIONS'].map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
