import { AppBar, CssBaseline, IconButton, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn } from '../../Redux/Reducers/AuthenticationReducer';
import { useNavigate } from 'react-router-dom';

const StyledAppBar = styled(AppBar)({
  backgroundColor: "blueviolet"
});

export default function Header() {
  const { isLoggedIn } = useSelector((state) => (state.authreducer));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setLoggedIn(false));
    localStorage.clear();
    navigate('/login');
  }

  return (
    <>
      <CssBaseline />
      <StyledAppBar position='static'>
        <Toolbar>
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
                  onClick={handleLogout}
                  color="inherit"
                >
                  <Typography>Logout</Typography>
                </IconButton>
              </div>
            )
          }
        </Toolbar>
      </StyledAppBar>
    </>
  )
}
