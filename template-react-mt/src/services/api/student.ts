import { useApi } from "../../hooks/useApi.ts";


// eslint-disable-next-line react-hooks/rules-of-hooks
const api = useApi();


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




export async function createStudent(body) {
  try {
    const {data} = await api.post(`signin`, body);
    return data
  } catch (error) {
    return {
      error: error
    };
  }
}


export async function updateStudentById(body, id) {
  try {
    const {data} = await api.patch(`student/${id}`,body );
    return data
  } catch (error) {
    return {
      error: error
    };
  }
}