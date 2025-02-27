import axios, { AxiosInstance } from "axios";

export function useApi() {

  const headers = {
    "Content-Type": "application/json",
    "Access-control-Allow-Origin": "*",
     
  };

  const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers
  });

  api.interceptors.request.use((config) => {
    // A chaque requete sortante Aller dans le local storage pour recuperer le token
    const token = localStorage.getItem("accessToken");
    //  et l'injecter dans la requete
    token ? (config.headers["Authorization"] = "Bearer " + token) : "";
    return config;
  });



  return api;
}
