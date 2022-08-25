import * as React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { CarCard, Filters } from './components';

const drawerWidth = 280;

const ModelsPage = () => {
  const [cars, setCars] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8080/cars')
      .then((result) => result.json())
      .then((fetchedCars) => setCars(fetchedCars));
  }, []);

  return (
    <Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 8,
      }}
      >
        <Typography
          variant="h3"
          sx={{ lineHeight: '2em' }}
        >
          Specialūs pasiūlymai
        </Typography>
      </Box>

      <Filters />

      <Grid container spacing={2} sx={{ py: 10, px: 2, pl: { xl: `${drawerWidth}px` } }}>
        {cars.map(({
          id,
          model,
          engine,
          color,
          gearbox,
          maxSpeed,
          power,
          zeroToHundred,
          price,
          img,
        }) => (
          <Grid key={id} item xs={12} sm={12} md={6} lg={4} xl={4}>
            <CarCard
              id={id}
              model={model}
              engine={engine}
              color={color}
              gearbox={gearbox}
              maxSpeed={maxSpeed}
              power={power}
              zeroToHundred={zeroToHundred}
              price={price}
              img={img}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ModelsPage;
