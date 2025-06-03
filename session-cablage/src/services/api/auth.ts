// import axios from "axios";

// // GET 
// // POST
// // PUT
// // PATCH
// // DELETE

// export async function signin() {
  
//     try {
//         const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/signin`);
//         return data;
        
//     } catch (error) {
//         console.log(error)
//     }
// }


import { useApi } from "../../hooks/useApi";

// GET
// POST
// PUT
// PATCH
// DELETE

// eslint-disable-next-line react-hooks/rules-of-hooks
const api = useApi();

export async function signin(params) {
  try {
    const { data } = await api.post(`auth/signin`, params);
    return data;
  } catch (error) {
    console.log(error);
  }
}