import { useState, useEffect } from "react";
import axios from "axios";
import { getTodos, getTodosById } from "../../services/api/todo";

export default function ContactPage(props: any) {
  const { handleAddMessage, lastname } = props;
  const test = 0;
  const [message, setMessage] = useState({});

  function handleChange(evt: any) {
    const { name, value } = evt.target;
    setMessage({ ...message, [name]: value });
  }

  function handleSubmit(evt: any) {
    evt.preventDefault();
    //console.log(message)
    handleAddMessage(message);
  }

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const response = await getTodos();
      } catch (error) {
        console.log(error);
      }
    };
    loadTodos();
  });


  useEffect(() => {
    const loadTodo = async () => {
      try {
        const response = await getTodosById(4);
      } catch (error) {
        console.log(error);
      }
    };
    loadTodo();
  });

  return (
    <>
      <h2> Page de contact </h2>

      <div className="border border-1 m-auto w-75">
        <div>
          <form
            onSubmit={(evt) => handleSubmit(evt)}
            className="d-flex flex-column w-75 m-auto"
          >
            <label htmlFor="firstname">Nom:</label>

            <input
              className=""
              type="text"
              name="firstname"
              id="firstname"
              onChange={(evt) => handleChange(evt)}
            />
            <br />
            <br />

            <label htmlFor="category">Categorie:</label>

            <select
              name="category"
              id="category"
              onChange={(evt) => handleChange(evt)}
            >
              <option value="">Selectionne une categorie</option>
              <option value="front">front</option>
              <option value="back">back</option>
              <option value="fullstack">fullstack</option>
              <option value="other">Autres</option>
            </select>
            <br />
            <br />

            <label htmlFor="message">Votre message</label>
            <br />
            <textarea
              name="message"
              id="message"
              onChange={(evt) => handleChange(evt)}
            ></textarea>
            <br />

            <input
              type="submit"
              value="Envoyer votre message"
              className="btn btn-secondary"
            />
          </form>
        </div>
      </div>
    </>
  );
}
