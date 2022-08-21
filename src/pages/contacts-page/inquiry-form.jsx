import React from 'react';
import {
  Paper,
  Box,
  Typography,
  Button,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';

const InquiryForm = ({
  title,
  btnText,
  disabled = false,
  onSubmit,
  children,
}) => (
  <Paper
    elevation={2}
    sx={{
      ml: '30%',
      mr: '30%',
      width: 400,
      my: 4,
      color: '#fff',
    }}
  >
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        zIndex: 1000,
      }}
      onSubmit={onSubmit}
    >
      <SecurityIcon sx={{ fontSize: 50, color: 'primary' }} />
      <Typography component="h1" variant="h4">{title}</Typography>
      {children}
      <Button
        type="submit"
        variant="contained"
        size="large"
        color="error"
        disabled={disabled}
      >
        {btnText}
      </Button>
    </Box>
  </Paper>
);

export default InquiryForm;
