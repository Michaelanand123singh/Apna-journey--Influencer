// src/services/auth.service.js
import api from './api';

export const authService = {
  async login(credentials) {
    const response = await api.post('/auth/login', credentials);
    if (response.data.token) {
      localStorage.setItem('auth_token', response.data.token);
    }
    return response.data;
  },

  async register(userData) {
    const response = await api.post('/auth/register', userData);
    if (response.data.token) {
      localStorage.setItem('auth_token', response.data.token);
    }
    return response.data;
  },

  async logout() {
    localStorage.removeItem('auth_token');
    await api.post('/auth/logout');
  },

  async getCurrentUser() {
    return api.get('/auth/me');
  }
};