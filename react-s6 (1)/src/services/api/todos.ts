import axios from "axios";

// GET
// POST
// PATCH
// PUT
// DELETE

export async function getTodos() {
    try {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function getTodoById(id:any) {
    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        return data;
    } catch (error) {
        console.log(error)
    }
}