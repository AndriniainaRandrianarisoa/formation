import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox
} from "@material-tailwind/react";

import { useFormik } from "formik";
import { object, string } from "yup";

export function UserCreateModal(props) {
  const { open, send, sendFormValues } = props;

  const test = "coucou";

  const [form, setForm] = useState({
    name: "",
    job: "",
    date: ""
  });

  const handleSendProps = () => {
    send();
  };

  const formSchema = object({
    name: string().required('champs oibligatoire').min(2, 'min 2 caracteres'),
    job: string().required('champs oibligatoire').min(2, 'min 2 caracteres'),
    date: string().required('champs oibligatoire').min(2, 'min 2 caracteres')
  });

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: form,
    validationSchema: formSchema,
    onSubmit: (values) => {
      sendFormValues(values);
    }
  });

  return (
    <>
      <Dialog
        size="xs"
        open={open}
        handler={handleSendProps}
        className="bg-transparent shadow-none"
      >
        <form onSubmit={handleSubmit}>
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Add user
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Add user modal.
              </Typography>
              <Typography className="-mb-2" variant="h6">
                Your name
              </Typography>
              <Input
                label="name"
                name="name"
                size="lg"
                onChange={handleChange}
              />
              {errors.name ? <div>{errors.name}</div> : null}
              <Typography className="-mb-2" variant="h6">
                Your Job
              </Typography>
              <Input label="Job" size="lg" name="job" onChange={handleChange} />
              {errors.job ? <div>{errors.job}</div> : null}
              <Typography className="-mb-2" variant="h6">
                Date
              </Typography>
              <Input
                label="date"
                size="lg"
                name="date"
                onChange={handleChange}
              />
              {errors.date ? <div>{errors.date}</div> : null}
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" fullWidth type="submit">
                Add user
              </Button>
              <Button
                className="mt-2"
                variant="gradient"
                onClick={handleSendProps}
                fullWidth
              >
                Annuler
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Dialog>
    </>
  );
}
