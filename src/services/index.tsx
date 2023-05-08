import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "http://localhost:3000/",
  // timeout: 5000,
});

export default instanceAxios;
