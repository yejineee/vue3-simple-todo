import axios from './axios';

export const getTodos = async () => {
  return axios.get('/todos');
};
