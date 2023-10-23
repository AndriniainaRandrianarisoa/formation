import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

import { getAllUsers } from "../../services/api/user";


const User = () => {


  const [users, setUsers] = useState([]);

  const handleButtonClick = () => {
    const element = {
      id: 5,
      firstname: "Ange5",
      lastname: "randriaefs",
      username: "coucouDGDS"
    };

    const copy = [...users]
    copy.push(element);
    setUsers(copy)
  };

  useEffect(() => {
    const loadApi = async () => {
      const response = await getAllUsers()
      console.log("🚀 ~ file: User.tsx:29 ~ loadApi ~ response:", response)
      setUsers(response.datas)
    }
    loadApi()
  }, []);

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
          </tr>
        </thead>
        <tbody>
          {users.map((element, index) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.firstname}</td>
              <td>{element.lastname}</td>
              <td>{element.username}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default User;
