import { useState } from "react";

export default function AddContactPage(props: any) {
  const { handleAddMessage } = props;

  const [message, setMessage] = useState({
    name: "",
    category: "",
    message: "",
  });

  function handleSubmit(evt: any) {
    evt.preventDefault();
    handleAddMessage(message);
  }

  function handleChange(evt: any) {
    console.log(evt.target);
    const { name, value } = evt.target;
    setMessage({ ...message, [name]: value });
  }

  return (
    <>
      <h2> Ajout d'un contact</h2>
      <div>
        <form
          onSubmit={(evt) => handleSubmit(evt)}
          className="d-flex flex-column w-75 m-auto"
        >
          <label htmlFor="name">Nom:</label>

          <input
            className=""
            type="text"
            name="name"
            id="name"
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
            <option value="question">Questions</option>
            <option value="suggestion">Suggestion</option>
            <option value="ask">Demande</option>
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
    </>
  );
}
