import * as React from 'react';
import {
  Box,
  styled,
  Typography,
  Button,
} from '@mui/material';
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
  position: 'absolute',
  top: 80,
  left: '5%',
  height: '600px',
  width: '80%',
  order: 2,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

const ParamsContainer = styled(Box)({
  position: 'absolute',
  top: 50,
  left: '50%',
  height: '300px',
  width: 'auto',
  order: 3,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
});

const ModelNames = styled(Box)(({ theme }) => ({
  height: '80%',
  width: 650,
  color: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(6),
}));

const HomePage = () => (
  <Box sx={{ height: '100vh', position: 'relative' }}>
    <Background component="img" src="/dbx.jpg" />
    <ContentContainer>
      <ModelNames component="main">
        <Button
          variant="text"
          sx={{ typography: 'h2' }}
        >
          DBX
        </Button>

        <Button
          variant="text"
          sx={{ typography: 'h2', opacity: '0.5', lineHeight: '0.5em' }}
        >
          VANTAGE
        </Button>

        <Button
          variant="text"
          sx={{ typography: 'h2', opacity: '0.5', lineHeight: '0.5em' }}
        >
          DB11
        </Button>

        <Button
          variant="text"
          sx={{ typography: 'h2', opacity: '0.5', lineHeight: '0.5em' }}
        >
          DBS
        </Button>
      </ModelNames>

      <ParamsContainer>
        <Typography
          variant="h6"
          component="h1"
          sx={{ color: '#fff', lineHeight: '2em' }}
        >
          Maksimalus greitis
        </Typography>
        <Typography
          variant="h6"
          component="h1"
          sx={{ color: '#fff', lineHeight: '2em' }}
        >
          Galia
        </Typography>
        <Typography
          variant="h6"
          component="h1"
          sx={{ color: '#fff', lineHeight: '2em' }}
        >
          0-100km
        </Typography>
      </ParamsContainer>
    </ContentContainer>
  </Box>
);

export default HomePage;
