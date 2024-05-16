import axios from "axios";
import PostData from "./../../pages/Post/faker"


// export async function getPosts() {
//     try {
//         const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');

//         return data;
//     } catch (error) {
//         console.log(error)
//     }
// }

export async function getPostById(id:any) {
    try { await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function getPosts() {
    try {
        const  data  = PostData

        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function createPost(data) {
  try {
      

      return data;
  } catch (error) {
      console.log(error)
  }
}