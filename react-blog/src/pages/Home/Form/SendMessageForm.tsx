import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export const SendMessageForm = (props) => {
  const { handleSendForm } = props;
  const [message, setMessage] = useState({
    subject: "",
    content: "",
    _id: "507f191e810c19729de860e123"
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSendForm(message);
    setMessage({ subject: "", content: "", _id: "507f191e810c19729de860e123" });
  };

  const handleChange = (evt: any) => {
    const { name, value } = evt.target;
    setMessage({ ...message, [name]: value });
  };

  return (
    <div>
      <Card className="p-3">
        <Card.Title>Envoyer un message</Card.Title>
        <Card.Body>
          <Form onSubmit={(evt) => handleSubmit(evt)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Sujet</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                placeholder="j'aime vraiment pas"
                onChange={(evt) => handleChange(evt)}
                value={message.subject}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                name="content"
                as="textarea"
                rows={3}
                placeholder="Utiliser react"
                onChange={(evt) => handleChange(evt)}
                value={message.content}
              />
            </Form.Group>
            <Button
              type="submit"
              variant="outline-dark"
              type="submit"
              size="sm"
            >
              Envoyer
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};
