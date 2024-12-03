
import { useApi } from "../../hooks/useApi.ts";

// eslint-disable-next-line react-hooks/rules-of-hooks
const api = useApi();

console.log("🚀 ~ api:", api)



export async function getAllStudents() {
  try {
    const {data} = await api.get(`student`);
    return data
  } catch (error) {
    return {
      error: error
    };
  }
}



export async function createStudent(payload) {
  try {
    const {data} = await api.post(`student`, payload);
    return data
  } catch (error) {
    return {
      error: error
    };
  }
}

