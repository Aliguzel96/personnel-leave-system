import axios from "axios";

const api = axios.create({
  baseURL: "https://personnel-leave-system-z1w7.onrender.com/api"
});

//interceptor
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;