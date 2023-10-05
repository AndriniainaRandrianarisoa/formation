import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneUserById } from "../../services/api/users";

const InfoContact = () => {
  const { id } = useParams();

  const [contact, setContact] = useState({});


  useEffect(() => {
    const findContact = async () => {
      const response = await getOneUserById(id)
      setContact(response);
    };

    findContact()
  }, []);

  // tableau de dependance vide si vous souhaitez executer le use Effect au montage de la page uniquement 
  // Si on souhaites observer le changement d'une valeur pour executer le useEffect, on remplira le tableau par le nom de la valeur a observer 
  
  return (
    <>
      Information d'un contact
      <div>
        <p> {contact.id}</p>
        <p> {contact.name}</p>
        <p> {contact.mail}</p>
        <p> {contact.phone}</p>
      </div>
    </>
  );
};

export default InfoContact;
