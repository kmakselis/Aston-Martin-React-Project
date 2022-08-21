import * as React from 'react';
import {
  Box,
  styled,
  Typography,
} from '@mui/material';
// import { className } from '@emotion/react';
// import CartContext from '../contexts/cart-context';

const Background = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  order: 1,
  objectFit: 'cover',
});

const ContentContainer = styled(Box)({
  height: '500px',
  width: '700px',
  order: 2,
  display: 'flex',
  flexDirection: 'column',
});

const ParamsContainer = styled(Box)({
  position: 'absolute',
  top: 50,
  height: '500px',
  width: '700px',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
});

const HomePage = () => (
  <ContentContainer sx={{ border: 1, borderColor: 'error.main' }}>
    <Background component="img" src="/contacts-background.jpg" />
    <ParamsContainer>
      <Typography
        variant="h1"
        component="h1"
        sx={{ color: '#fff', lineHeight: '3em' }}
      >
        Gauti pasiūlymą
      </Typography>

      <Typography
        variant="h4"
        component="h1"
        sx={{
          color: '#fff', lineHeight: '1.5em', align: 'center',
        }}
      >
        Užpildykite formą ir paruošime pasiūlymą išskirtinai Jums.
      </Typography>
    </ParamsContainer>

  </ContentContainer>

);

export default HomePage;
