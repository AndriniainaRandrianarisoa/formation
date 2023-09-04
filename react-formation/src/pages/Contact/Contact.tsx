import React from "react";
import AddContactPage from "./forms/AddContact/AddContact";
export const Contact = () => {
  const elements = [
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
    },
  ];

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
          {elements.map((element, index) => (
            <tr key={index}>
              <td>{element.id}</td>
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
      <div>
        <AddContactPage />
      </div>
    </>
  );
};

export default Contact;
