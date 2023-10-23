import { faker } from '../../pages/User/faker'
import { useApi } from '../../hooks/useApi.ts'

// eslint-disable-next-line react-hooks/rules-of-hooks
const api = useApi()

export async function getAllUsers() {
  try {
    //const response = await api.get(`https://jsonplaceholder.typicode.com/users`);
    const response = faker
    return response;
  } catch (error) {
    return error;
  }
}




