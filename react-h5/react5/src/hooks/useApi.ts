import axios, { AxiosInstance } from "axios";

export function useApi() {
  const headers = { "Access-Control-Allow-Origin": "*" };

  const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers
  });

  api.interceptors.request.use((config) => {
    console.log(config);
    // Aller recuperer mon token dans le localstorage
    config.headers["Authorization"] = "Bearer 4654654654654646546sdfs5";
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log(error);

      if (error.response && error.response.status === 401) {
        // Récuperer son refreshToken
        // Renvoyer une requete avec ce dernier
        // If : le refreshToken est valide ==> on stock le nouveau token & refreshToken
        // On renvoi la requete
        // Else : les refreshToken est invalide ==> on redirige vers le login
      }

      if (error.message === "Network Error") {
        // Faire un traitement particulier
      }
    }
  );

  return api;
}
