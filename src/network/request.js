import axios from "axios";

export function request(config) {
  const axiosInstance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  });
  return axiosInstance(config);
}
