const serverAddress = 'http://localhost:8080';

const formatCar = ({
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

const fetchAll = async () => {
  const response = await fetch(`${serverAddress}/cars?_expand=category`);
  const cars = await response.json();

  return cars.map(formatCar);
};

const create = async (carProps) => {
  const response = await fetch(`${serverAddress}/cars`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(carProps),
  });

  const car = await response.json();

  return car;
};

const update = async (id, cupProps) => {
  const response = await fetch(`${serverAddress}/cars/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cupProps),
  });

  const cup = await response.json();

  return cup;
};

const remove = async (id) => {
  await fetch(`${serverAddress}/cars/${id}`, {
    method: 'DELETE',
  });

  return true;
};

const fetchCategories = async () => {
  const response = await fetch(`${serverAddress}/categories`);
  const categories = await response.json();

  return categories;
};

const CarService = {
  fetchAll,
  create,
  update,
  remove,
  fetchCategories,
};

export default CarService;
