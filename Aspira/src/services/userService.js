// Functions to call user-related endpoints

import API from './api';

// Register new user
export const registerUser = async (userData) => {
  try {
    // POST request to /api/users/register
    const response = await API.post('/users/register', {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      bio: userData.bio,
      experience: userData.experience || 0,
    });
    return response.data; // Returns { message, user }
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Login user
export const loginUser = async (email, password) => {
  try {
    // POST request to /api/users/login
    const response = await API.post('/users/login', {
      email,
      password,
    });
    
    // Store JWT token in localStorage
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    
    return response.data; // Returns { message, token, user }
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Get current user profile
export const getCurrentUser = async () => {
  try {
    // GET request to /api/users/me (requires authentication)
    const response = await API.get('/users/me');
    return response.data.user;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Update user profile
export const updateUser = async (userId, updates) => {
  try {
    // PATCH request to /api/users/:id (requires authentication)
    const response = await API.patch(`/users/${userId}`, updates);
    return response.data.user;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Upload resume file
export const uploadResume = async (userId, file) => {
  try {
    // Create FormData to send file
    const formData = new FormData();
    formData.append('resume', file); // multer expects "resume" field name
    
    // POST request with file to /api/users/:id/upload/resume
    const response = await API.post(`/users/${userId}/upload/resume`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Logout user
export const logoutUser = () => {
  // Clear stored data
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};