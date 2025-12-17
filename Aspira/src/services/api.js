// This file handles all HTTP requests to the backend

import axios from 'axios';

// Create axios instance with base URL from environment variable
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
});

// Interceptor to add JWT token to all requests
API.interceptors.request.use(
  (config) => {
    // Get token from localStorage (set after login)
    const token = localStorage.getItem('token');
    if (token) {
      // Add Bearer token to Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor to handle response errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // If token expired (401), redirect to login
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default API;