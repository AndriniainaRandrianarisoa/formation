import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export const SendPostForm = (props) => {


  const { saveNewPost } = props;

  const [post, setPost] = useState({
    title: "",
    body: "",
    // id generator not fixed
    id: 9,
    userId: 3
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    saveNewPost(post);

    // setPost({
    //   title: "",
    //   body: "",
    //   // id generator not fixed
    //   id: 9,
    //   userId: 1
    // });
  };

  const handleChange = (evt: any) => {
    const { name, value } = evt.target;
    setPost({ ...post, [name]: value });
  };

  return (
    <div>
      <Card className="p-3">
        <Card.Title>Ajout d'un article</Card.Title>
        <Card.Body>
          <Form onSubmit={(evt) => handleSubmit(evt)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Sujet</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="j'aime vraiment pas"
                onChange={(evt) => handleChange(evt)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>post</Form.Label>
              <Form.Control
                name="body"
                as="textarea"
                rows={3}
                placeholder="Utiliser react"
                onChange={(evt) => handleChange(evt)}
              />
            </Form.Group>
            <Button
              type="submit"
              variant="outline-dark"
              type="submit"
              size="sm"
            >
              Creer un article
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};
