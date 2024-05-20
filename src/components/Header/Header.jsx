import { AppBar, CssBaseline, IconButton, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { Menu as MenuIcon, AccountCircle } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const StyledAppBar = styled(AppBar)({
  backgroundColor: "blueviolet"
});


export default function Header() {
  const { isLoggedIn } = useSelector((state) => (state.authreducer));
  const [anchorEl, setAnchorEl] = useState(null);


  return (
    <>
      <CssBaseline />
      <StyledAppBar position='static'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon 
            // onClick={toggleDrawer(true)} 
            />
          </IconButton>
          <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>
            Fintech
          </Typography>
          {
            isLoggedIn && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={(e) => {setAnchorEl(e.currentTarget)}}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                {/* <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
                  <MenuItem onClick={() => setAnchorEl(null)}>Logout</MenuItem>
                </Menu> */}

              </div>


            )
          }
        </Toolbar>

      </StyledAppBar>
    </>
  )
}
