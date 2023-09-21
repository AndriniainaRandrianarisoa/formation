import React, {useState, useEffect} from "react";
import AddContactPage from "./forms/AddContact/AddContact";
export const Contact = () => {
const [test, setTest] = useState(false)

  useEffect(() => {
    // ca te permet de gerer le fonctione asynchrone
    // 
    console.log("coucou du useEffect")
  },[])
  // tableau de dependance est vide ca veux dire ton useEffect s'execute une seule fois
  // quand un parametre existe il devient ecouteur du changement de la valeur de ce parans et s'execute au changement 



  const [contacts, setContacts]: any = useState([
    {
      id: "INV001",
      name: "jhon doe",
      mail: "jhon@mail.com",
      phone: "525634553",
    },
    {
      id: "INV002",
      name: "Eden Doe",
      mail: "eden@mail.com",
      phone: "525634553",
    },
    {
      id: "INV003",
      name: "jeanne Doe",
      mail: "jeanne@mail.com",
      phone: "525634553",
    }
  ])

//const title = "Ajout d'un contact"
  const [formTitle, setFormTitle] = useState("Ajout d'un contact")

  const [showAlert, setShowAlert] = useState(false)

  const handleAddContact = (data) => {
    console.log("coucoucoucocucoucocuo", data)
    const formatted_data = {
      id: "INV003",
      name: data.name,
      mail: data.mail,
      phone: data.phone
    }

    const copy = [...contacts]
    copy.push(formatted_data)
    setContacts(copy)
    setTest(true)
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Mail</th>
            <th>Telephone</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((element, index) => (
            <tr key={index}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.mail}</td>
              <td>{element.phone}</td>
              <td>
                <button>
                  <a href={`/contact/${element.id}`}> button</a>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <AddContactPage coucou = { handleAddContact } hello={formTitle}/>
      </div>
           

      
    </>
  );
};

export default Contact;
