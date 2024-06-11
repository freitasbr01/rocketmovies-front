
import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovies-backend-q0jd.onrender.com"
  // baseURL: "http://localhost:3333"
});