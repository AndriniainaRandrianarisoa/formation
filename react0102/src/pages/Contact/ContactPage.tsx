import { useState } from "react";
import "./Contact.css";

interface Message {
  title: string;
  category: string;
  message: string;
}

export default function ContactPage(props) {

  const { message, sendToParent } = props;

  const text = "exemple"


  const [form, setForm] = useState<Message>({
    title: "Développeur",
    category: "",
    message: ""
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    //setForm({ ...form, title: "Intégrateur" });
    sendToParent(text)
  }



  function handleChange(evt) {
    // if(name == "title") {
    //   setForm({...form, title : value } )
    // }
    // if (name == "message") {
    //   setForm({...form, message : value } )
    // }
    // let name = evt.target.name
    // let value = evt.target.value
    const {name, value } = evt.target
     setForm({...form, [name] : value } )
  }


  return (
    <>
      <h1> Contact Page </h1>

      {message}

      <div className="">
        <div>
          <form onSubmit={(evt) => handleSubmit(evt)}>
            <label htmlFor="title">Titre:</label>

            <input
              onChange={(evt) => handleChange(evt)}
              className=""
              type="text"
              name="title"
              id="title"
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
