import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useFormik } from "formik";
import * as Yup from 'yup';

export const SendMessageForm = (props) => {
  const { handleSendForm } = props;

  const [message, setMessage] = useState({
    subject: "",
    content: ""
  });

  const validationSchema = Yup.object({
     subject : Yup.string().required("Le sujet est obligatoire").min(2,"Minimum 2 caracteres"),
     content : Yup.string().required().email()
  })

  // const formik = useFormik({
  //   initialValues: {
  //     subject: "",
  //     content: ""
  //   },

  //   onSubmit: (values) => {
  //     console.log("🚀 ~ SendMessageForm ~ values:", values);
  //   }
  // });

  const { values, handleChange, errors, handleSubmit, handleBlur } = useFormik({
    initialValues: message,
    //validationSchema : validationSchema,
    validationSchema,
    onSubmit: (values) => {
      console.log("🚀 ~ SendMessageForm ~ values:", values);
    }
  });

  return (
    <div>
      <Card className="p-3">
        <Card.Title>Envoyer un message</Card.Title>
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
             {errors.subject && <small>{errors.subject}</small> } 
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
                onChange={handleChange}
                value={values.content}
              />
          {errors.content && <small>{errors.content}</small> } 
            </Form.Group>
            <Button type="submit" variant="outline-dark" size="sm">
              Envoyer
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};
