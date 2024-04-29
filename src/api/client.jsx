import axios from "axios";

const baseURL = "http://localhost:3001/";

export const client = axios.create({
  //baseURL: process.env.baseURL,
  baseURL: baseURL,
});

//Recojo únicamente la parte de data en la respuesta
client.interceptors.response.use((response) => response.data);

//Header ['Authorization'] = `Bearer ${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmN2FlN2U0Mi00MTQ2LTQ2YmMtODI5Zi0yMGY3OTZkZjk4NmYiLCJpYXQiOjE3MTQ0MTAyODYsImV4cCI6MTc0NTk2Nzg4Nn0.x7WCXysyk_SqOosSHZ60AreN0mMpDmZQW7Q92tiNvzE"}`

client.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmN2FlN2U0Mi00MTQ2LTQ2YmMtODI5Zi0yMGY3OTZkZjk4NmYiLCJpYXQiOjE3MTQ0MTAyODYsImV4cCI6MTc0NTk2Nzg4Nn0.x7WCXysyk_SqOosSHZ60AreN0mMpDmZQW7Q92tiNvzE`;
