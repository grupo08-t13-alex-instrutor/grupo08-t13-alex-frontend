import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "https://kenzie-kars.onrender.com",
  timeout: 5000,
});

export default instanceAxios;
