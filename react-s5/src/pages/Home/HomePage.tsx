import { useEffect, useState } from "react";
import {
  getTodos,
  getTodoById,
  createTodo,
  getTodosV2
} from "../../services/api/todos";

export default function HomePage() {
  const [title, setTitle] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const [todos, setTodos] = useState<any>([]);
  const [todoById, setTodoById] = useState<any>({});
  const [condition, setCondition] = useState(false)

  useEffect(() => {
    async function loadTodos() {
      const result = await getTodosV2();
      if(result.status != 200) {
        setCondition(true)
      }
      setTodos(result.datas);
    }

    async function loadTodoById(id: number) {
      const result = await getTodoById(id);
      setTodoById(result);
    }

    loadTodos();
    loadTodoById(57);
  }, []);

  async function submitButton() {
    const body = {
      id: 201,
      title: "Test",
      completed: true,
      userId: 1
    };

    const result = await createTodo(body);
    console.log(result);
  }


  return (
    <>
      <h1> Home Page </h1>
      <p> Ceci est la page d'accueil </p>
      <p> {title} </p>
      {condition ? <h1>Coucou mon test</h1> : <h1>Coucou mon test false</h1>}
      {condition && <h1>ERROR</h1>}

      <div>
        { todos && todos.map((todo: any, index: number) => (
          <div key={index}>- {todo.title}</div>
        ))}
      </div>
    
      <p> {JSON.stringify(todoById)} </p>
      <button onClick={submitButton}> Envoyer</button>
      <button onClick={() => setCount(count + 1)}> Compteur </button>
    </>
  );
}
