import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
});

export async function submitContactForm(payload) {
  const { data } = await api.post('/contact', payload);
  return data;
}

export default api;
