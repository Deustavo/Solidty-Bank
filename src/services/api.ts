import axios from "axios";

const api = axios.create({
  baseURL: "https://accenture-java-desafio.herokuapp.com",
});

export default api;
