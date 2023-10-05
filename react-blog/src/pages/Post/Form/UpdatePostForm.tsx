import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export const UpdatePostForm = (props) => {

  const { handleSendUpdateForm, post } = props;
  
  const [updatedPost, setUpdatedPost] = useState({})

  useEffect(() => {
    setUpdatedPost(post)
  }, [post])
  
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newPost = {
      id: updatedPost.id, 
      userId: updatedPost.userId, 
      body: updatedPost.body,
      title: updatedPost.title
    }

  
    handleSendUpdateForm(newPost);

    setUpdatedPost({})
  };

  const handleChange = (evt: any) => {
    const { name, value } = evt.target;
    setUpdatedPost({ ...updatedPost, [name]: value });
  };



  return (
    <div>
      <Card className="p-3">
        <Card.Title>Modification d'un article</Card.Title>
        <Card.Body>
          <Form onSubmit={(evt) => handleSubmit(evt)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Sujet</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="j'aime vraiment pas"
                onChange={(evt) => handleChange(evt)}
                value={updatedPost.title}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                name="body"
                as="textarea"
                rows={3}
                placeholder="Utiliser react"
                onChange={(evt) => handleChange(evt)}
                value={updatedPost.body}
              />
            </Form.Group>
            <Button
              type="submit"
              variant="outline-dark"
              type="submit"
              size="sm"
            >
              Modifier
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};
