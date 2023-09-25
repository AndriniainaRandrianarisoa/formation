import { useState } from "react";

<<<<<<< HEAD
export default function AddContactPage(props) {
  
  const { coucou, hello } = props;

  const [contact, setContact] = useState({
=======
export default function AddContactPage(props: any) {
  const { handleAddcontact } = props;

  const [contact, setcontact] = useState({
>>>>>>> 459ef918a3cdbe3c6a69ecb8c39be5581e85fd3d
    name: "",
    mail: "",
    phone: "",
  });

  function handleSubmit(evt: any) {
    evt.preventDefault();
<<<<<<< HEAD
    coucou(contact);
=======
    handleAddcontact(contact);
>>>>>>> 459ef918a3cdbe3c6a69ecb8c39be5581e85fd3d
  }

  function handleChange(evt: any) {
    const { name, value } = evt.target;
<<<<<<< HEAD

    setContact({ ...contact, [name]: value });
    console.log("event", contact)
=======
    setcontact({ ...contact, [name]: value });
>>>>>>> 459ef918a3cdbe3c6a69ecb8c39be5581e85fd3d
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

<<<<<<< HEAD
          <label htmlFor="category">MAIL:</label>
=======
          <label htmlFor="mail">Mail:</label>
>>>>>>> 459ef918a3cdbe3c6a69ecb8c39be5581e85fd3d

          <input
            className=""
            type="text"
            name="mail"
            id="mail"
            onChange={(evt) => handleChange(evt)}
          />
          <br />
          <br />

<<<<<<< HEAD
          <label htmlFor="message">TEL</label>
          <br />
          <input
            className=""
            type="text"
=======
          <label htmlFor="contact"> Telephone</label>
          <br />
          <input
            className=""
            type="phone"
>>>>>>> 459ef918a3cdbe3c6a69ecb8c39be5581e85fd3d
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
