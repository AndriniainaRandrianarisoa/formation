import { faker } from '../../pages/User/faker'
import axios, { AxiosInstance } from "axios";

export async function getAllUsers() {
  try {
    //const response = await api.get(`users`);
    const response = faker
    return response;
  } catch (error) {
    return error;
  }
}


export async function getOneUser(id: number) {
  try {
     const response = await axios.get(`users/${id}`);
    //const response = faker.datas.find(el => el.id == id)
    return response;
  } catch (error) {
    return error;
  }
}

export async function signin() {
  try {
    const response = await axios.get(`users`);
    //const response = faker
    return response;
  } catch (error) {
    return error;
  }
}


