import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api'
});



// Add a request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      config.headers['Content-Type'] = 'application/json';
    }
    return config;
  },
  (error) => {
    store.dispatch('stopLoading');
    return Promise.reject(error);
  }
);

// Response interceptor
axios.interceptors.response.use(
  response => {
    store.dispatch('stopLoading');
    return response;
  },
  error => {
    store.dispatch('stopLoading');
    return Promise.reject(error);
  }
);



export default apiClient;
