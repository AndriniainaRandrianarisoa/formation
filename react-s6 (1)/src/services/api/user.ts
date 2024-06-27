import axios from "axios";
import { usersFaker } from "../../pages/User/faker";

// GET
// POST
// PATCH
// PUT
// DELETE

export async function getUsers() {
    try {
        // const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
        const data = usersFaker
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function getUsersById(id:any) {
    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function createUser(body) {
  try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      return data;
  } catch (error) {
      console.log(error)
  }
}