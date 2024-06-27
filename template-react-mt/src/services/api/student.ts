import { useApi } from "../../hooks/useApi.ts";

// eslint-disable-next-line react-hooks/rules-of-hooks
const api = useApi();

export async function getAllStudent() {
  try {
    const {data} = await api.get(`todos`);
    return data
  } catch (error) {
    return {
      error: error
    };
  }
}


export async function createStudent(body:any) {
  try {
    const {data} = await api.post(`student`, body);
    return data 
  } catch (error) {
    return {
      error: error
    };
  }
}


export async function getStudentById(id:any) {
  try {
      const { data } = await api.get(`student/${id}`);

      return data;
  } catch (error) {
      console.log(error)
  }
}

