import axios from "axios";

// GET 
// POST
// PUT
// PATCH
// DELETE

export async function signin() {
  
    try {
        const { data } = await axios.post('signin');
        //localStorage.setItem("access-token", data.token);
        return data;
        
    } catch (error) {
        console.log(error)
    }
}


export async function refresh() {
  
  try {
      const { data } = await axios.post('signin', {});
      //localStorage.setItem("access-token", data.token);
      return data;
      
  } catch (error) {
      console.log(error)
  }
}