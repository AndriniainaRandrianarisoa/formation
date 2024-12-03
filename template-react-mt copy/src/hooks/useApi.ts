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
    token ? config.headers["Authorization"] = "Bearer " + token : '';

    return config;

  });

  api.interceptors.response.use(
    (response: any) => response, 
    async (error) => {

    if(error.response && error.response.status === 401)  {
      console.log("cououc")
      // store request in error
      
      // get refresh token from cache 

      // send request with refresh token on header to generate new token an refresh 

      // store new token an refresh on cache

      // send saved request with new token
    }

    }
  )








  



  return api
}


