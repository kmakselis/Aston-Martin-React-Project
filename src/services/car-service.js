const domain = process.env.REACT_APP_SERVER_ADDRESS;
const collectionName = 'cars';
// const relationsParams = '_expand=category&_expand=color&_expand=model&_expand=engine';

const formatCarOffer = ({
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
  category,
  categoryId,
}) => ({
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
  category: category.title,
  categoryId,
});

const fetchAllCars = async () => {
  const response = await fetch(`${domain}/${collectionName}?_expand=category`);
  const cars = await response.json();

  return cars.map(formatCarOffer);
};

const createCarOffer = async (carProps) => {
  const response = await fetch(`${domain}/${collectionName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(carProps),
  });

  const car = await response.json();

  return car;
};

const updateCarOffer = async (id, cupProps) => {
  const response = await fetch(`${domain}/${collectionName}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cupProps),
  });

  const cup = await response.json();

  return cup;
};

const removeCarOffer = async (id) => {
  await fetch(`${domain}/${collectionName}/${id}`, {
    method: 'DELETE',
  });

  return true;
};

const CarService = {
  fetchAll: fetchAllCars,
  create: createCarOffer,
  update: updateCarOffer,
  remove: removeCarOffer,
};

export default CarService;
