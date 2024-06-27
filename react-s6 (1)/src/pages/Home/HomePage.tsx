import { useEffect, useState } from 'react';
import './HomePage.css';
import { getTodoById, getTodos } from '../../services/api/todos';

export default function HomePage() {

    const [message, setMessage] = useState<any>('');
    const [count, setCount] = useState<any>(0);

    const [listTodo, setListTodo] = useState<any>([]);

    useEffect(() => {
        console.log("useEffect");
        // APPEL HTTP
        async function loadTodos() {
            const todos = await getTodos();
            setListTodo(todos)
        }
        loadTodos();
    }, [])


    // useEffect avec dépendance
    useEffect(() => {
        console.log("useEffect 2")
        setCount(count + 1)
    }, [message])


    //useEffect avec une fonction de nettoyage
    /*useEffect(() => {

        const timerId = setInterval(() => {
            console.log("coucou");
        }, 1000);

        return () => {
            clearInterval(timerId);
        };

    }, []);*/


    async function submitMessage(id:any) {
        setMessage("Coucou")
        const detail = await getTodoById(id);
        console.log(detail)
    }


    return (
        <>
            <h1> Page d'accueil </h1>

            <button onClick={submitMessage}> Charger les données </button>

            <p id="paragraphe"> Salut </p>

            {
                listTodo.map((todo: any) => (
                    <div key={todo.id} onClick={() => submitMessage(todo.id)}>
                        {todo.title}  <br /> <br />
                    </div>
                ))
            }
        </>
    )
}