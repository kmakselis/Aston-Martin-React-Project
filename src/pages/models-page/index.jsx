import * as React from 'react';
import { Grid } from '@mui/material';
import { CarCard } from './components';

const ModelsPage = () => {
  const [cars, setCars] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8080/cars')
      .then((result) => result.json())
      .then((fetchedCars) => setCars(fetchedCars));
  }, []);

  return (
    <Grid container spacing={2} sx={{ py: 3, px: 2 }}>
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
      }) => (
        <Grid key={id} item xs={12} sm={12} md={6} lg={4} xl={3}>
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
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ModelsPage;
