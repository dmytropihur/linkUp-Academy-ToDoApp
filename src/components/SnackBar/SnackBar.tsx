import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import React from 'react';

type SnackBarProps = {
  open: boolean;
  setOpen: (boolean: boolean) => void;
  children: string;
};

const SnackBar: React.FC<SnackBarProps> = ({ children, open, setOpen }) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        {children}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
