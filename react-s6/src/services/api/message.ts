//import axios from "axios";
//import { useApi } from "../../hooks/useApi";
import {messagesFaker} from "./../../pages/Message/faker"
//const api = useApi();

// GET 
// POST
// PUT 
// PATCH
// DELETE

export async function getMessages() {
    try {
      const data  = messagesFaker
      //const { data } = await axios.get("/message");
        return data;
    } catch (err) {
        console.log("ERROR")
        console.log(err)
    }
}


export async function createMessage(newMessage) {
  try {
    //const data  = messagesFaker
    //const { data } = await axios.post("/message", newMessage);
      return data;
  } catch (err) {
      console.log("ERROR")
      console.log(err)
  }
}

// => design => 1h 
// => dynamisation => 2h 
// => cablage avec le back  => 1h 

