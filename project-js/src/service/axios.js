import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

// Add a request interceptor to update the Authorization header before each request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    // Do something with request error (optional)
    return Promise.reject(error);
  }
);

// controller.abort();

class APIClient {
  endpoint;

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  get = (config) =>
    axiosInstance.get(this.endpoint, config).then((res) => res.data);

  post = (data) =>
    axiosInstance.post(this.endpoint, data).then((res) => res.data);
}

export default APIClient;
