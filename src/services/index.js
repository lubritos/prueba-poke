import axios from "axios";

const axiosPokes = axios.create({
  baseURL: "https://www.pokemon.com/us/api/",
  responseType: "json"
});

export default axiosPokes;
