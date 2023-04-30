import axios from 'axios';

export const setAuthHeader = token => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.Authorization = '';
};