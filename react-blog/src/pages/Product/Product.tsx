import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

import { getAllUsers } from "../../services/api/user";

const User = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      firstname: "Ange5",
      lastname: "randriaefs",
      username: "coucouDGDS"
    },
    {
      id: 2,
      firstname: "Ange345",
      lastname: "randriaefs",
      username: "coucouDGDS"
    },
    {
      id: 3,
      firstname: "Ange345",
      lastname: "randriaefs",
      username: "coucouDGDS"
    },
    {
      id: 4,
      firstname: "Ange345",
      lastname: "randriaefs",
      username: "coucouDGDS"
    }
  ]);

  // const products = [
  //   {
  //     id: 1,
  //     firstname: "Ange5",
  //     lastname: "randriaefs",
  //     username: "coucouDGDS"
  //   },
  //   {
  //     id: 2,
  //     firstname: "Ange345",
  //     lastname: "randriaefs",
  //     username: "coucouDGDS"
  //   },
  //   {
  //     id: 3,
  //     firstname: "Ange345",
  //     lastname: "randriaefs",
  //     username: "coucouDGDS"
  //   },
  //   {
  //     id: 4,
  //     firstname: "Ange345",
  //     lastname: "randriaefs",
  //     username: "coucouDGDS"
  //   }
  // ];

  const product = {
    id: 10,
    firstname: "Ange345dfDSG",
    lastname: "randriaefs",
    username: "coucouDGDS"
  };

  const test = "coucou";

  const handleClick = () => {
    const copy = [...products]
    copy.push(product);


    setProducts(copy)
    // setProducts([{
    //   id: 10,
    //   firstname: "Ange345dfDSG",
    //   lastname: "randriaefs",
    //   username: "coucouDGDS"
    // }])
  };

  return (
    <>
      <Button
        size="sm"
        variant="outline-dark"
        className="mx-1"
        onClick={handleClick}
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
          {products.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.firstname}</td>
              <td>{element.lastname}</td>
              <td>{element.username}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default User;
