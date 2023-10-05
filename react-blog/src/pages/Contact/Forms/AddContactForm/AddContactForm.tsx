import React, { useState } from "react";

const AddContactForm = (props) => {
  // recuperer les props
  const { saveNewContact, title } = props;

  const [newContact, setNewContact] = useState({
    name: "",
    mail: "",
    phone: ""
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    saveNewContact(newContact);
    setNewContact({ name: "", mail: "", phone: "" });
  };

  const handleChange = (evt: any) => {
    const { name, value } = evt.target;
    // copy of object
    // const copy = {...newContact},

    setNewContact({ ...newContact, [name]: value });
  };

  return (
    <div>
      <h2> {title}</h2>
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

          <label htmlFor="contact"> Telephone :</label>
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
    </div>
  );
};

export default AddContactForm;
