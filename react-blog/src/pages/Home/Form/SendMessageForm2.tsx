import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
// import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useFormik } from "formik";

export const SendMessageForm = (props) => {
  const { handleSendForm } = props;
  const [message, setMessage] = useState({
    subject: "",
    content: "",
    _id: "507f191e810c19729de860e123"
  });

  const validationSchema = Yup.object({
    subject: Yup.string().min(5).required("Subject is required and more than 5 letters"),
    content: Yup.string().required("Last Name is required")
  });

  const {values, handleBlur, handleChange,handleSubmit, errors } = useFormik({
    initialValues: message,
    validationSchema : validationSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });



  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   handleSendForm(message);
  //   setMessage({ subject: "", content: "", _id: "507f191e810c19729de860e123" });
  // };

  // const handleChange = (evt: any) => {
  //   const { name, value } = evt.target;
  //   setMessage({ ...message, [name]: value });
  // };

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
                onChange={handleChange}
            
                value={values.content}
              />
              {errors.content && <small>{errors.content}</small>}
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
