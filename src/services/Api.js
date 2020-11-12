import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://5fa97367c9b4e90016e6a7ec.mockapi.io/api',
});
 
export const getTodos = () => {
  return instance.get('/todos');
};

export const postTodos = (data) => {
  return instance.post('/todos',data);
};

export const getTodosById = (id) => {
  return instance.get(`/todos/${id}`);
};

export const putTodos = (id,data) => {
  return instance.put(`/todos/${id}`,data); 
};

export const deleteTodos = (id) => {
    return instance.delete(`/todos/${id}`);
  };



export default instance;