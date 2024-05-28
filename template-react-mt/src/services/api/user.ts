import { useApi } from "../../hooks/useApi.ts";

// eslint-disable-next-line react-hooks/rules-of-hooks
const api = useApi();

export async function getAllUsers() {
  try {
    const response = await api.get(`users`);
    return response.data
  } catch (error) {
    return {
      datas: [],
      satus: false, 
      error: error
    };
  }
}

export async function getUserById(id: any) {
  try {
    const response = await api.get(`posts/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function updateUser(id: any, body: any) {
  try {
    const response = await api.put(`posts/${id}`, body);
    // simulation of success api response
    return {
      datas: body,
      status: 200
    };
  } catch (error) {
    return error;
  }
}


export async function createUser(body: any) {
  console.log("🚀 ~ createNewPost ~ body:", body)  
  try {
    const response = await api.post(`posts`, body);
   
    console.log("🚀 ~ createNewPost ~ response:", response)
    return {
      datas: body,
      status: 200
    };
  } catch (error) {
    return error;
  }
}
