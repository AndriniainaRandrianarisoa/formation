import { useApi } from "../../hooks/useApi.ts";

// eslint-disable-next-line react-hooks/rules-of-hooks
const api = useApi();

export async function getAllPosts() {
  try {
    const response = await api.get(`posts`);
    
    console.log("🚀 ~ getAllPosts ~ response:", response)
    return response
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
