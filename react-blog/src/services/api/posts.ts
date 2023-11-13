import { useApi } from "../../hooks/useApi.ts";

const api = useApi();

export async function getAllPosts() {
  try {
    const response = await api.get(`posts`);
    return {
      datas: response, 
      status:  true
    };
  } catch (error) {
    return {
      datas: [],
      satus: false, 
      error: error
    };
  }
  
}

export async function getOnePostById(id: any) {
  try {
    const response = await api.get(`posts/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function updateOnePost(id: any, body: any) {
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


export async function createNewPost(body: any) {
  try {
    const response = await api.post(`posts`, body);
   
    return {
      datas: body,
      status: 200
    };
  } catch (error) {
    return error;
  }
}
