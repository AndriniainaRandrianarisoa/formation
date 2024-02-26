import { faker } from '../../pages/User/faker'


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
     //const response = await api.get(`users/${id}`);
    const response = faker.datas.find(el => el.id == id)
    return response;
  } catch (error) {
    return error;
  }
}




