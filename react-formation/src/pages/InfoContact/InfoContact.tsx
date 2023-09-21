import React, { useState } from "react";
import { useParams } from "react-router-dom";

const InfoContact = () => {
  const { id } = useParams();

  const [element, setElement] = useState({});

  const elements = [
    {
      id: "INV001",
      method: 10,
      amount: 210,
      percent: 35,
      status: 10
    },
    {
      id: "INV002",
      method: 20,
      amount: 267,
      percent: 78,
      status: 10
    },
    {
      id: "INV003",
      method: 30,
      amount: 890,
      percent: 20,
      status: 10
    }
  ];

  useEffect(() => {
    const findContact = () => {
      const response = elements.find((el) => el.id == id);
      console.log(
        "🚀 ~ file: InfoContact.tsx:35 ~ findData ~ response:",
        response
      );
      //setElement(response);
    };
    findContact
  }, []);

  // tableau de dependance
  // se met a jour a chaque ecghangement de state =. update

  // useEffect( () => {

  // })

<<<<<<< HEAD
  findData();
=======
  


>>>>>>> 459ef918a3cdbe3c6a69ecb8c39be5581e85fd3d

  return (
    <>
      Information d'un contact
      <div>
        <p> {element.id}</p>
        <p> {element.amount}</p>
      </div>
    </>
  );
};

export default InfoContact;
