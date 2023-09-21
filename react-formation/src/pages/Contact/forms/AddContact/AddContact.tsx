import { useState } from "react";

export default function AddContactPage(props: any) {
  const { handleAddcontact } = props;

  const [contact, setcontact] = useState({
    name: "",
    mail: "",
    phone: "",
  });

  function handleSubmit(evt: any) {
    evt.preventDefault();
    handleAddcontact(contact);
  }

  function handleChange(evt: any) {
    console.log(evt.target);
    const { name, value } = evt.target;
    setcontact({ ...contact, [name]: value });
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

          <label htmlFor="mail">Mail:</label>

          <input
            className=""
            type="text"
            name="mail"
            id="mail"
            onChange={(evt) => handleChange(evt)}
          />
          <br />
          <br />

          <label htmlFor="contact"> Telephone</label>
          <br />
          <input
            className=""
            type="phone"
            name="phone"
            id="phone"
            onChange={(evt) => handleChange(evt)}
          />
          <br />

          <input
            type="submit"
            value="Envoyer votre contact"
            className="btn btn-secondary"
          />
        </form>
      </div>
    </>
  );
}
