import { useEffect, useState } from "react";
import { messagesFaker } from "./faker";
import { getMessages } from "../../services/api/message";

export interface Message {
    title: string;
    category: string;
    message: string;
}




export default function MessagePage(props: any) {

   // const { messages } = props;
   const [messages, setMessages] = useState(messagesFaker)

  useEffect(()  => {
    // UseEffect executé uniquement quand la page est monté
    const loadMessage = async () => {
      const response = await getMessages()
      setMessages(response)
    }
   
    loadMessage()
  }, []);

   

    return (
        <>
            <h1> Message Page</h1>
            <p> Ceci est la page des messages DgdgDSgDS</p>

            {
                messages.map((message: any, index:number) => (
                    <div key={index}>
                        <h2> Titre : {message.title} </h2>
                  
                        <h2> Message : {message.message} </h2>
                    </div>
                ))
            }

        </>
    )
}