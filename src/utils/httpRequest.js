import axios from 'axios';

console.log(process.env);

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, options = {}) => {
  const res = await httpRequest.get(path, options);
  return res.data;
};

export default httpRequest;
