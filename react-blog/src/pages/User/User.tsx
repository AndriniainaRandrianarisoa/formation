import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

import { getAllUsers, getOneUser } from "../../services/api/user";
import { faker } from "./faker";

const User = () => {
  const [users, setUsers] = useState([]);

  const handleButtonClick = () => {
    const element = {
      id: 5,
      firstname: "Ange5",
      lastname: "randriaefs",
      username: "coucouDGDS"
    };

    const copy = [...users];
    copy.push(element);
    setUsers(copy);
  };

  useEffect(() => {
    const loaduser = async () => {
      try {
        const response = await getAllUsers();
        console.log("🚀 ~ file: User.tsx:28 ~ loaduser ~ response:", response);
        setUsers(response.datas);
      } catch (error) {
        console.log("🚀 ~ file: User.tsx:31 ~ loaduser ~ error:", error);
      }
    };
    loaduser();
  }, []);

  const handleButtonInfoClick = async(id: number) => {
    console.log("🚀 ~ file: User.tsx:38 ~ handleButtonInfoClick ~ id:", id)
    const response = await getOneUser(id)
    console.log("🚀 ~ file: User.tsx:40 ~ handleButtonInfoClick ~ response:", response)
  }

  return (
    <div>
      <Button
        size="sm"
        variant="outline-dark"
        className="mx-1"
        onClick={handleButtonClick}
      >
        Ajouter
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((element, index) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.firstname}</td>
              <td>{element.lastname}</td>
              <td>{element.username}</td>
              <td>
                <Button
                  size="sm"
                  variant="outline-dark"
                  className="mx-1"
                  onClick={() =>handleButtonInfoClick(element.id)}
                  
                >
                  Voir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default User;
