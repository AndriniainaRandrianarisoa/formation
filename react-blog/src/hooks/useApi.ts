import axios, { AxiosInstance } from "axios";

export function useApi() {
  // recuperer le token 
  const token = localStorage.getItem('TOKEN')



  const headers = {
    "Content-Type": "application/json",
    "Access-control-Allow-Origin": "*",
    //"Authorization" : `Bearer ${token}`
  };

  const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers
  });

  api.interceptors.request.use((config) => {

    // recuper le token dans le local storage 
    const token = localStorage.getItem('TOKEN')
    // il faut parse le token
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  });

  // api.interceptors.response.use((config) => {
  //   // recuper le token dans le local storage 

  //   return config;
  // })
  return api
}


