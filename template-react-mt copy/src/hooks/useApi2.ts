import axios, { AxiosInstance } from "axios";

export function useApi() {
  const headers = { 'Access-Control-Allow-Origin': '*' };

  const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL_PROD,
    headers
  });

  api.interceptors.request.use((config: any) => {
    //Ajouter le Token dans le header

    const token = localStorage.getItem("accessToken");
    token ? (config.headers["Authorization"] = "Bearer " + token) : "";

    return config;
  });

  api.interceptors.response.use(
    (response: any) => response,

    // check si il y a une erreur
    async (error: any) => {

      // si il y a une erreur 401
      if (error.response && error.response.status === 401) {

        // recupere la requete d'origine (getAllUser)
        const originalRequest = error.config;

        // pour éviter boucle infinie du refreshToken
        // if (!originalRequest._retry) {
        //   originalRequest._retry = true;
        // }

        // Récupérer le RefreshToken dans le localstorage
        const refreshToken = localStorage.getItem("refreshToken");

        if (refreshToken) {
          try {
            // on execute la requete qui va chercher le nouveau token
            const result = await refreshToken(refreshToken);

            // on inject le nouveau token et refresh dans le local storage
            localStorage.setItem("accessToken", result.data.tokens.accessToken);
            localStorage.setItem(
              "refreshToken",
              result.data.tokens.refreshToken
            );

            // on execute la requete d'origine avec le nouveau token
            originalRequest.headers["Authorization"] =
              "Bearer " + result.data.tokens.accessToken;

            return axios(originalRequest);
          } catch (error) {
            location.href = "/";
          }
        } else {
          location.href = "/";
        }
      }

      if(error.response && error.response.status === 500) {
        location.href = "/";
      }

      return Promise.reject(error);
    }
  );

  return api;
}
