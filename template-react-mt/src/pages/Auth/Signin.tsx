import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

import {
  Card,
  Input,
  Button,
  Typography
} from "@material-tailwind/react";
import { signin } from '../../services/api/auth';

interface AuthSignin {
  email: string,
  password: string
}

export function Signin() {
  const navigate = useNavigate();
  const [form, setForm] = useState<AuthSignin>({
    email: '',
    password: '',
  });

  const dataSchema = Yup.object({
    email: Yup.string().email().required("Champs obligatoire"),
    password: Yup.string().required("Champs obligatoire")
  });

  const {handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: form,
    validationSchema : dataSchema,
    onSubmit:async values => {
      const response = await signin(values)
      console.log("🚀 ~ Signin ~ response:", response)
      if(response) {
        // set token and refresh token in local storage
        localStorage.setItem("accessToken", response.token)
        localStorage.setItem("refreshToken", response.refresh_token)
        navigate("/");
      }
    },

  });

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign in
      </Typography>
      <form className="mt-8 mb-2 w-100 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-6">
         
          
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Email
          </Typography>
          <Input
            name="email"
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            value={values.email}
          />
          <small>{errors.email}</small>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            name="password"
            type="password"
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        
            onChange={handleChange}
            value={values.password}
          />
          <small>{errors.password}</small>
         
        </div>
       
        <Button className="mt-6" fullWidth type="submit">
          Ajouter
        </Button>
       
      </form>
    </Card>
  );
}
