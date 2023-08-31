import axios from "axios";
// import Directories from "../Directory/Index";

axios.defaults.baseURL = `https://dev.finosell.link/api/v2/`;
// axios.defaults.baseURL = `${Directories.BASE_URL}`;

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIzNDgxNDQ4NjIwMDQiLCJpYXQiOjE2MTYyMzc4Mjc2NzN9.8QjRI7kI-jkhu7WOXEDSVGEdwp_03v9HEKVmBEvE1yU`,
  },
  timeout: 80000,
});

export default axiosInstance;
