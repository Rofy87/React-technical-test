import axios from "axios";
const BASE_URL = "http://localhost/api";
//const BASE_URL = "http://"+ HOST + "/api/";

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
