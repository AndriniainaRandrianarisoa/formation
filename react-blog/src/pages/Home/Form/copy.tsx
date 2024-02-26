import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useFormik } from "formik";
import * as Yup from 'yup';

export const SendMessageForm = (props) => {
  const { handleSendForm, prout } = props;

  const [message, setMessage] = useState({
    subject: "",
    content: "",
    //_id: "507f191e810c19729de860e123"
  });

  const validationSchema = Yup.object({
    // subject : Yup.string().min(5).required('prout'),
    // content : Yup.string().min(10, "prout").required('content is required')
  })
  
  const {values, handleChange, errors, handleSubmit, handleBlur } = useFormik({
    initialValues : message,
    validationSchema,
    onSubmit: (values) => {
      handleSendForm(values)
    }
  })

  return (
    <div>
      <Card className="p-3">
        <Card.Title>Envoyer un message {prout}</Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Sujet</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                placeholder="j'aime vraiment pas"
                onChange={handleChange}
                value={values.subject}
              />
              {errors.subject && <small>{errors.subject}</small>}
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
                value={values.content}
                onChange={handleChange}
              />
               {errors.content && <small>{errors.content}</small>}
            </Form.Group>
            <Button
              type="submit"
              variant="outline-dark"
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
