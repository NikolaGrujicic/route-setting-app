import Axios from 'axios';

const stuartClient = Axios.create({ baseURL: 'https://stuart-frontend-challenge.now.sh' });

export const convertToGeolocation = async address => {
  const response = await stuartClient.post('/geocode', address);
  return response;
};

export const createStuartJob = async address => {
  const response = await stuartClient.post('/jobs', address);
  return response;
};

export default stuartClient;
