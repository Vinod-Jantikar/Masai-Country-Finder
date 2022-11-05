import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };


export const CountryModal = ({open, setOpen, countryData}) => {
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
        >
          <Box sx={style}>
            <Typography>
             Native Name : {countryData.name?.nativeName.eng.official}
            </Typography>
            <Typography>
           Sub Region : {countryData.subregion}
            </Typography>
            <Typography>
             Currency Name : {countryData.currencies.USD.name}
            </Typography>
            <Typography>
             Language Names : {countryData.languages.eng}
            </Typography>
            {/* <Typography>
             Border Countries : {countryData.name.nativeName.eng.official}
            </Typography> */}
          </Box>
        </Modal>
      </div>
    );
  }