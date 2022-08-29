const domain = process.env.REACT_APP_SERVER_ADDRESS;

const fetchAll = async () => {
  const response = await fetch(`${domain}/models`);
  const categories = await response.json();

  return categories;
};

const ModelService = {
  fetchAll,
};

export default ModelService;
