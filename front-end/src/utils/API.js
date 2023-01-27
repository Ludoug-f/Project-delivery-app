const fetchBody = async (path, method, payload) => {
  const response = fetch(`http://localhost:3001${path}`, {
    headers: { 'Content-Type': 'application/json' },
    method,
    body: JSON.stringify(payload),
  })
    .then((req) => req.json());

  return response;
};

const fetchBodyless = async (path, method) => {
  const response = fetch(`http://localhost:3001${path}`, {
    method,
  })
    .then((req) => req.json());

  return response;
};


const GetProducts = async () => {
  const response = fetch(`http://localhost:3001/products`, {
    method: 'GET',
  })
    .then((req) => req.json());

  return response;
};


export default { fetchBody, fetchBodyless, GetProducts };
