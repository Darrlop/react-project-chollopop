import axios from "axios";

//const baseURL = "http://localhost:3001/";

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_URLBASE,
});

//Recojo únicamente la parte de data en la respuesta
client.interceptors.response.use((response) => response.data);

export const setAuthorizationHeader = (token) =>
  (client.defaults.headers.common["Authorization"] = `Bearer ${token}`);

export const deleteAuthorizationHeader = () =>
  delete client.defaults.headers.common["Authorization"];
