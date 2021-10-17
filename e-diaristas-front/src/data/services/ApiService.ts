import axios from "axios";

const url = "https://ediaristas-workshop.herokuapp.com";
//const url = "http://localhost:8080";

export const ApiService = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});
