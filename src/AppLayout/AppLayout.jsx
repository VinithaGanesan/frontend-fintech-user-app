import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import { Box, Container, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <>
      <Container maxWidth="lg">
        <Box >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ color: 'white', textAlign: 'center' }}>
                <Header />
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box sx={{ color: 'white' }} >
                <Sidebar />
              </Box>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Box>
                <Outlet />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}
