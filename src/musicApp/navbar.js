
import * as React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AboutUs from './aboutus';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};


export default function NavBar(props)
{
  return(
    <Box id="NavBar">
      <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar sx={{backgroundColor:"black"}}>
            <Typography sx={{width:"100", height:"80px", display:"flex"}} variant="h6" component="div">
            {/* <Box sx={{display:"flex", justifyContent:"space-between"}}> */}
              <Box sx={{}}><img style={{height:"80px"}} src="/IMAGES/2.png"></img></Box>
              <Box sx={{margin:"auto",height:"80px"}}><h1 style={{color:"red",fontSize:"28px",fontFamily:"unset"}}>VIBEREX</h1></Box>
              <Box sx={{margin:"auto"}}><AboutUs /></Box>
            {/* </Box> */}
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
    </Box>
  )
}