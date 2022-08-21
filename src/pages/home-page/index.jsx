import * as React from 'react';
import {
  Box,
  styled,
  Typography,
  Button,
  LinearProgress,
} from '@mui/material';
import Countup from 'react-countup';
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
  width: '300px',
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

Pagal Modelių duomenis suformuoti mygtukus, ir nustayti  ANT UŽVEDIMO state kintamajį "activeCarID"

Mygtuko iteravimo kode, tikrinti ar state kintamojo "activeCarID" sutampa
su iteruojamo mygtuko/užrašo id, jei taip papildomai stilizuoti

*/
const MAX_SPEED = 400;
const speedRatio = 100 / MAX_SPEED;
const MAX_POWER = 700;
const powerRatio = 100 / MAX_POWER;
const MAX_ACCELERATION = 5;
const accelerationRatio = 100 / MAX_ACCELERATION;

const HomePage = () => {
  const [speed, setSpeed] = React.useState(367);
  const [power, setPower] = React.useState(510);
  const [acceleration, setAcceleration] = React.useState(2.8);
  const [bgImage, setbgImage] = React.useState('/db11.jpg');
  // const [btnStyle, setBtnStyle] = React.useState('');

  const DB11Progress = () => {
    setSpeed(367);
    setPower(510);
    setAcceleration(2.8);
    setbgImage('/db11.jpg');
  };
  const DBXProgress = () => {
    setSpeed(317);
    setPower(442);
    setAcceleration(4.8);
    setbgImage('/dbx.jpg');
  };
  const VantageProgress = () => {
    setSpeed(354);
    setPower(503);
    setAcceleration(3);
    setbgImage('/vantage.jpg');
  };
  const DBSProgress = () => {
    setSpeed(317);
    setPower(402);
    setAcceleration(3.5);
    setbgImage('/dbs.jpg');
  };

  return (
    <Box>
      <Background component="img" src={bgImage} />
      <ContentContainer>

        <ModelNames component="main">

          <Button
            variant="text"
            sx={{ typography: 'h2', color: '#fff' }}
            onClick={() => { DB11Progress(); }}
          >
            DB11
          </Button>

          <Button
            variant="text"
            sx={{
              typography: 'h2', opacity: '0.5', lineHeight: '0.5em', color: '#fff',
            }}
            onClick={() => { VantageProgress(); }}
          >
            VANTAGE
          </Button>

          <Button
            variant="text"
            sx={{
              typography: 'h2', opacity: '0.5', lineHeight: '0.5em', color: '#fff',
            }}
            onClick={() => { DBXProgress(); }}
          >
            DBX
          </Button>

          <Button
            variant="text"
            sx={{
              typography: 'h2', opacity: '0.5', lineHeight: '0.5em', color: '#fff',
            }}
            onClick={() => { DBSProgress(); }}
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
          <Box sx={{ color: '#fff', lineHeight: '2em' }}>
            <Countup start={0} end={speed} duration={0.4} suffix=" km/h" preserveValue />
          </Box>
          <Box sx={{ width: '100%', marginBottom: [3] }}>
            <LinearProgress
              variant="determinate"
              value={speed * speedRatio}
              color="secondary"
            />
          </Box>

          <Typography
            variant="h6"
            component="h1"
            sx={{ color: '#fff', lineHeight: '2em' }}
          >
            Galia
          </Typography>
          <Box sx={{ color: '#fff', lineHeight: '2em' }}>
            <Countup start={0} end={power} duration={0.4} suffix=" AG" />
          </Box>
          <Box sx={{ width: '100%', marginBottom: [3] }}>
            <LinearProgress
              variant="determinate"
              value={power * powerRatio}
              color="secondary"
            />
          </Box>
          <Typography
            variant="h6"
            component="h1"
            sx={{ color: '#fff', lineHeight: '2em' }}
          >
            0-100km
          </Typography>
          <Box sx={{ color: '#fff', lineHeight: '2em' }}>
            <Countup start={0} end={acceleration} duration={0.4} suffix=" s" decimals={1} />
          </Box>
          <Box sx={{ width: '100%' }}>
            <LinearProgress
              variant="determinate"
              value={acceleration * accelerationRatio}
              color="secondary"
            />
          </Box>
        </ParamsContainer>
      </ContentContainer>
    </Box>
  );
};

export default HomePage;
