import axios from "axios";

// GET 
// POST
// PUT
// PATCH
// DELETE

export async function getFormaation() {
  
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');

        return data;
    } catch (error) {
        console.log(error)
    }
}


