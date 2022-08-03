import * as React from 'react';
import {
  Box,
  styled,
  Typography,
  Button,
  LinearProgress,
} from '@mui/material';
import Countup from 'react-countup';
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
/*
Dizainas
Modeliai formuojami pagal duomenis: MIN {
  id
  title
  maxSpeed,
  power,
  zero2Hundread
}
Pagal Modelių duomenis suformuo ti mygtukus, ir nustayti  ANT UŽVEDIMO state kintamajį "activeCarID"

Mygtuko iteravimo kode, tikrinti ar state kintamojo "activeCarID" sutampa
su iteruojamo mygtuko/užrašo id, jei taip papildomai stilizuoti

*/
const MAX_SPEED = 400;
const speedRatio = 100 / MAX_SPEED;

const HomePage = () => {
  const [speed, setSpeed] = React.useState(0);

  return (
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
            onMouseEnter={() => setSpeed(200 * speedRatio)}
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
          <Box sx={{ width: '100%' }}>
            <LinearProgress
              variant="determinate"
              value={speed}
              color="secondary"
            />
          </Box>
          <Box sx={{ color: '#fff', lineHeight: '2em' }}>
            <Countup start={300} end={390} duration={0.4} suffix=" km/h" />
          </Box>
          <Typography
            variant="h6"
            component="h1"
            sx={{ color: '#fff', lineHeight: '2em' }}
          >
            Galia
          </Typography>
          <Box sx={{ width: '100%' }}>
            <LinearProgress
              variant="determinate"
              value={speed}
              color="secondary"
            />
          </Box>
          <Box sx={{ color: '#fff', lineHeight: '2em' }}>
            <Countup start={350} end={550} duration={0.4} suffix=" AG" />
          </Box>
          <Typography
            variant="h6"
            component="h1"
            sx={{ color: '#fff', lineHeight: '2em' }}
          >
            0-100km
          </Typography>
          <Box sx={{ width: '100%' }}>
            <LinearProgress
              variant="determinate"
              value={speed}
              color="secondary"
            />
          </Box>
          <Box sx={{ color: '#fff', lineHeight: '2em' }}>
            <Countup start={1} end={4.3} duration={0.4} suffix=" s" decimals={1} />
          </Box>
        </ParamsContainer>
      </ContentContainer>
    </Box>
  );
};

export default HomePage;
