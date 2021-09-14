import axios from "axios";

const axiosConfig = {
  baseURL: process.env.REACT_APP_BACKEND_HOST,
  timeout: 60 * 3 * 1000,
  headers: {},
};

const http = axios.create(axiosConfig);

export default http;
