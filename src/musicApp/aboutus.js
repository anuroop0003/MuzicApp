
import * as React from 'react';
import Button from '@mui/material/Button';
import ContactlessSharpIcon from '@mui/icons-material/ContactlessSharp';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Modal, Typography } from '@mui/material';
import { borderRadius, Box } from '@mui/system';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#ffffff',
      contrastText: '#000000',
    },
  },
});

const stylecomponent = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 700,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



export default function AboutUs()
{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return(
        <Box>
        <ThemeProvider theme={theme}>
        <Box sx={{margin: "auto"}}><Button onClick={handleOpen} color="neutral" variant="contained" endIcon={<ContactlessSharpIcon />}>
          About US
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
              <Box sx={stylecomponent}>
                  <Typography id="modal-modal-description" sx={{ mt: 2, fontSize:"30px", fontFamily:"monospace"}}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor 
                      ligula. 
                  </Typography>
              </Box>
          </Modal>
        </Box>
        </ThemeProvider>
        </Box>
  )
}