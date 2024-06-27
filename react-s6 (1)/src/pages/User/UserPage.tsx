import { useEffect, useState } from "react";
import { getUsers } from "../../services/api/user";

export default function UserPage(props: any) {

    const [users, setListTodo] = useState<any>([]);

    useEffect(() => {
      console.log("useEffect");
      // APPEL HTTP
      async function loadUsers() {
          const todos = await getUsers();
          console.log("🚀 ~ loadTodos ~ todos:", todos)
          setListTodo(todos)
      }
      loadUsers();
  }, [])


    return (
        <>
            <h1> Page des user </h1>

            {
                users.map((message: any, index: number) => (
                    <>
                        <div key={index}>
                            <p> {message.name} </p>
                            //<p> {message.username} </p> 
                        </div>
                        --------------------------
                    </>
                ))
            }
        </>
    )
}