import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_END_POINT;

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
