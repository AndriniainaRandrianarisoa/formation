import axios from "axios";
import { useApi } from "../../hooks/useApi";
import { faker } from "../../pages/Home/faker";
const api = useApi();

// GET 
// POST
// PUT 
// PATCH
// DELETE

export async function getTodos() {
    try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos");
        console.log(data)
        return data;
    } catch (err) {
        console.log("ERROR")
        console.log(err)
    }
}

export async function getTodosV2() {
    try {
        // const { data } = await api.get("todos");
        const response = faker
        return response;
    } catch (err) {
        console.log("ERROR")
        console.log(err)
    }
}


export async function getTodoById(id: number) {
    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return data;
    } catch (err) {
        console.log("ERROR")
        console.log(err)
    }

}

export async function getTodoByIdV2(id: number) {
    try {
        const { data } = await api.get(`todos/${id}`);
        return data;
    } catch (err) {
        console.log("ERROR")
        console.log(err)
    }

}

export async function createTodo(body: any) {
    try {
        const { data } = await axios.post(`https://jsonplaceholder.typicode.com/todos`, body);
        return data;
    } catch (err) {
        console.log("ERROR")
        console.log(err)
    }
}

