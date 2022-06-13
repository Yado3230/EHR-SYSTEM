import axios from 'axios';

export const API1 = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
  credentials: 'include',
});
export const API2 = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
  credentials: 'include',
});
