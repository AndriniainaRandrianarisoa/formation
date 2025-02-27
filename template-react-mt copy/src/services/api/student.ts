
import axios from "axios";
import { useApi } from "../../hooks/useApi.ts";


// eslint-disable-next-line react-hooks/rules-of-hooks
const api = useApi();



export async function getAllStudents() {
  
  try {
    const { data } = await api.get('/student');
   //const data = faker;
    return data
  } catch (error) {
    return {
      error: error
    };
  }
}


export async function getOneStudentById(id:string) {
  try {
    const { data } = await axios.get(`student/${id}`);
    return data
  } catch (error) {
    return {
      error: error
    };
  }
}



