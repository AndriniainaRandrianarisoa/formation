import { useEffect, useState } from "react";
import {  } from "react-router-dom";
import { getTodoById, getTodos } from "../../services/api/todos";

export default function MessageDetailPage() {

    const { idMessage } = useParams();
    console.log(idMessage)

    const [todos, setTodos] = useState<any>([])


    // useEffect sans dépendance
    useEffect(() => {
        console.log("Ma page est monté")
        
        async function loadTodos(){
            const listTodo = await getTodos();
            setTodos(listTodo)
        }

        async function loadTodobyId(){
            const myTodo = await getTodoById(idMessage)
            console.log(myTodo)
        }
       
        loadTodos();
        loadTodobyId();
    }, [])

    // useEffect avec dépendance
    useEffect(() => {
        console.log("Ma page est monté 2")
    }, [todos])

    function submitTodo() {
        setTodos([...todos, {
            "userId": 5,
            "id": 201,
            "title": "delectus aut autem",
            "completed": false
          }])
    }

    
    return (
        <>
            <h1> Message Detail Page</h1>
            <p> Ceci est la page des détails de messages</p>
            <button onClick={submitTodo}> Envoyer une Todo</button>
            <button onClick={addNewTodo}> Envoyer une new todo</button>
        </>
    )
}