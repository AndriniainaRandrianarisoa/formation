import { useState } from "react";

export default function AddContactPage(props) {
  
  const { coucou, hello } = props;

  const [contact, setContact] = useState({
    name: "",
    mail: "",
    phone: "",
  });

  function handleSubmit(evt: any) {
    evt.preventDefault();
    coucou(contact);
  }

  function handleChange(evt: any) {
    const { name, value } = evt.target;

    setContact({ ...contact, [name]: value });
    console.log("event", contact)
  }

  return (
    <>
      <h2> {hello} </h2>
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

          <label htmlFor="category">MAIL:</label>

          <input
            className=""
            type="text"
            name="mail"
            id="mail"
            onChange={(evt) => handleChange(evt)}
          />
          <br />
          <br />

          <label htmlFor="message">TEL</label>
          <br />
          <input
            className=""
            type="text"
            name="phone"
            id="phone"
            onChange={(evt) => handleChange(evt)}
          />
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
