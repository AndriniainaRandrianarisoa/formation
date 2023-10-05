import React, {useEffect, useState} from "react";
import AddContactForm from "./Forms/AddContactForm/AddContactForm";
import { getAllUsers } from "../../services/api/users";
export const Contact = () => {
  const formTitle = "Ajout d'un contact";

  const [contacts, setConctacts] = useState([]);


  useEffect(() => {
   const loadAllUsers = async() => {
    const response = await getAllUsers()
    setConctacts(response)
   }

   
   loadAllUsers()
  }, []);


  const saveContact = (data) => {
    // const copy = JSON.parse(JSON.stringify(contacts));
    const copy = [...contacts]
    copy.push(data)
    setConctacts(copy)
  };

  

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Mail</th>
            <th>Telephone</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((element, index) => (
            <tr key={index}>
              <td>{element.name}</td>
              <td>{element.mail}</td>
              <td>{element.phone}</td>
              <td>
                <button>
                  <a href={`/info/${element.id}`}> button</a>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddContactForm saveNewContact={saveContact} title={formTitle} />
    </>
  );
};

export default Contact;
