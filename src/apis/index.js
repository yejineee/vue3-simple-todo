import axios from './axios';

export const getTodos = async () => {
  return axios.get('/todos');
};

export const updateTodo = async (id, data) => {
  return axios.put(`/todos/${id}`, data);
};
