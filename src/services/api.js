// O AXIOS É UMA BIBLIOTECA PARA TRABALHAR COM REQUISIÇÕES HTTP, PARA CONSEGUIR CONSUMIR REQUISIÇÕES HTTP, VAMOS USAR O AXIOS PARA CONSUMIR NOSSO BACKEND

import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333"
});