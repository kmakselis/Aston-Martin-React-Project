import React from 'react';
import {
  Paper,
  Typography,
  TextField,
  Box,
  Button,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import { useFormik } from 'formik';

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const {
    dirty, values,
    handleChange,
  } = useFormik({
    initialValues,
  });

  return (
    <Paper elevation={3} sx={{ p: 5, width: 400 }}>
      <Paper sx={{
        position: 'fixed',
        top: 300,
        left: 20,
        width: 400,
        p: 3,
      }}
      >
        <Typography variant="h5">Formik state</Typography>
        <Box component="pre">
          {JSON.stringify({ values, dirty }, null, 4)}
        </Box>
      </Paper>

      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 5,
        }}
      >
        <SecurityIcon sx={{ fontSize: 50, color: 'primary.main' }} />
        <Typography component="h1" variant="h4">Prisijungimas</Typography>
        <TextField
          name="email"
          label="El. paštas"
          type="email"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Slaptažodis"
          type="password"
          fullWidth
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" size="large" disabled={!dirty}>Prisijungti</Button>
      </Box>
    </Paper>
  );
};

export default LoginPage;
