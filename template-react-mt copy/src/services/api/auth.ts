import { useApi } from "../../hooks/useApi.ts";
import axios from "axios";

// eslint-disable-next-line react-hooks/rules-of-hooks
const api = useApi();

interface AuthSignin {
  email: string,
  password: string
}


export async function signin(body:AuthSignin) {
  try {
    const {data} = await api.post(`/auth/signin`, body);
    return data 
  } catch (error) {
    return {
      error: error
    };
  }
}



export async function refreshToken(refresh) {
  //const refreshToken = localStorage.getItem('refreshToken')
  const headers = { Authorization : "Bearer " + refresh }


  try {
    const response = await axios.get(`posts/${id}`, body);
    // simulation of success api response
    return {
      datas: body,
      status: 200
    };
  } catch (error) {
    return error;
  }
}
