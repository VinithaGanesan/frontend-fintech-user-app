import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom';
import { Box, Container, CssBaseline, Grid } from '@mui/material';
import './AppLayout.css';



export default function AppLayout({ children }) {
  const [openDrawer, setOpenDrawer] = useState(true);

  // function toggleDrawer() {
  //   setOpenDrawer(prevState => !prevState);
  // }
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
              <Box sx={{ color: 'white' }}>
              <Sidebar />
              </Box>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Box >
              {children}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{color: 'black', textAlign: 'center' }}>
                Footer
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

    </>
  )
}
