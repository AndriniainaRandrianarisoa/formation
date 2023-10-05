import { useApi } from "../../hooks/useApi";

// eslint-disable-next-line react-hooks/rules-of-hooks
const api = useApi();

export async function getAllUsers() {
  try {
    const response = await api.get(`users`);
    return response.data;
  } catch (error) {
    return error;
  }
}


export async function getOneUserById(id: number) {
  try {
    const response = await api.get(`users/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}


export async function updateUserById(id: number, data) {
  try {
    const response = await api.post(`users/${id}`, data);
    return response.data;
  } catch (error) {
    return error;
  }
}


export async function deleteUserById(id: number) {
  try {
    const response = await api.delete(`users/${id}`,);
    return response.data;
  } catch (error) {
    return error;
  }
}