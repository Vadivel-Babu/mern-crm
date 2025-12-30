import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-crm-h6wv.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
