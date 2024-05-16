import { useState } from "react";
import "./Contact.css";

export default function ContactPage(props) {

  const {handleSendForm, pipi} = props


  let form2 = {
    title: "Développeur",
    category: "",
    message: ""
  };

  const [form, setForm] = useState<any>({
    title: "Développeur",
    category: "",
    message: ""
  });



  const [firstname, setFirstname] = useState<string>("");

  const [listUser, setListUser] = useState<any>(["Amine"]);

  function handleSubmit(e: any): void {
    e.preventDefault();

    /* OBJET */

    let newForm = { ...form };
    //newForm.title = "Intégrateur";
    setForm(newForm);

    //Sucre syntaxique
    //setForm({ ...form, title: "Intégrateur" });

    /* OBJET */

    /* STRING */

    setFirstname("Pauline");

    /* STRING */

    /* ARRAY */

    let newListUser = [...listUser];
    newListUser.push("Alexandre");
    setListUser(newForm);

    //Sucre syntaxique
    setListUser([...listUser, { age: 0 }]);

    /* ARRAY */


    console.log("ciyciy",newForm);

    handleSendForm(newForm)
 

  }

 
  const handleChange = (evt) => {

    // const test = {
    //   name:evt.target.name,
    //   value: evt.target.value
    // }

    const {name, value} = evt.target

    // setForm({ ...form, [test.name]:test.value });

    setForm({ ...form, [name]:value });
  }
 
  return (
    <>
      <h1> Contact Page </h1>

      <p> {form.title} </p>

      <div className="">
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Titre:</label>

            <input className="" type="text" name="title" id="title" 
            onChange={(evt) => handleChange(evt)}/>
            <br />
            <br />

            <label htmlFor="category">Categorie:</label>

            <select name="category" id="category" onChange={(evt) => handleChange(evt)}>
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
            <textarea name="message" id="message" onChange={(evt) => handleChange(evt)}></textarea>
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
