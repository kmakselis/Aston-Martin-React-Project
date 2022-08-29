const domain = process.env.REACT_APP_SERVER_ADDRESS;

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
  const response = await fetch(`${domain}/cars?_expand=category`);
  const cars = await response.json();

  return cars.map(formatCarOffer);
};

const createCarOffer = async (carProps) => {
  const response = await fetch(`${domain}/cars`, {
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
  const response = await fetch(`${domain}/cars/${id}`, {
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
  await fetch(`${domain}/cars/${id}`, {
    method: 'DELETE',
  });

  return true;
};

const fetchCarCategories = async () => {
  const response = await fetch(`${domain}/categories`);
  const categories = await response.json();

  return categories;
};

const CarService = {
  fetchAll: fetchAllCars,
  create: createCarOffer,
  update: updateCarOffer,
  remove: removeCarOffer,
  fetchCategories: fetchCarCategories,
};

export default CarService;
