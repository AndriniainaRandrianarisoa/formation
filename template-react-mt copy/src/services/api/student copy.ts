import { useApi } from "../../hooks/useApi.ts";

// eslint-disable-next-line react-hooks/rules-of-hooks
const api = useApi();

export async function getAllStudents() {
  try {
    const { data } = await api.get(`student`, {
      headers: {
        Authorization: "Bearer your-token-here",
        "Content-Type": "application/json"
        // Ajoutez d'autres headers si nécessaire
      }
    });
    return data;
  } catch (error) {
    return {
      error: error
    };
  }
}
