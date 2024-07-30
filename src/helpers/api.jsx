// api.js
import axios from 'axios';

export const API_URL = 'http://localhost:3002/api/v1';

// export const API_URL = 'https://api-teduh.telogorejo.com/api/v1';

// Konfigurasi Axios  
const instance = axios.create({
  baseURL: API_URL,
  timeout: 5000, // Atur timeout sesuai kebutuhan
});

// Fungsi untuk mengatur token authorization
export const setAuthToken = (token) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token); // Simpan token di localStorage
  } else {
    delete instance.defaults.headers.common['Authorization'];
    localStorage.removeItem('token'); // Hapus token dari localStorage
  }
};

// Ambil token dari localStorage saat aplikasi dimuat
const savedToken = localStorage.getItem('token');
if (savedToken) {
  setAuthToken(savedToken);
}

// Interseptor untuk menangani error seperti token expired
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Redirect ke halaman login jika token expired
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default instance;

// Fungsi untuk melakukan operasi CRUD
export const fetchData = (url, config = {}) => {
  return instance.get(url, config);
};

export const postData = (url, data, config = {}) => {
  return instance.post(url, data, config);
};

export const putData = (url, data, config = {}) => {
  return instance.put(url, data, config);
};

export const deleteData = (url, config = {}) => {
  return instance.delete(url, config);
};
