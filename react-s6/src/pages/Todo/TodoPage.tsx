import { useEffect, useState } from "react";

import { getTodos } from "../../services/api/todos";

export interface Message {
    title: string;
    category: string;
    message: string;
}




export default function TodosPage(props: any) {

   // const { messages } = props;
   const [todos, setTodos] = useState()

  useEffect(()  => {
  
    const loadTodos = async () => {
      const response = await getTodos()
      setTodos(response)
    }
   
    loadTodos()
  }, []);

   

    return (
        <>
            <h1> todos Page</h1>
   

            {todos &&
                todos.map((todo: any, index:number) => (
                    <div key={index}>
                        <h2> Titre : {todo.title} </h2>
                        

                        {todo.completed ?  <small> complet</small> :<small> incomplet</small> }
                    </div>
                ))
            }

        </>
    )
}