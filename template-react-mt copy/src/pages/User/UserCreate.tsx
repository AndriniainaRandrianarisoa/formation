import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { useState } from "react";

export function UserCreate() {

  const [formValues, setFormValues] = useState({
    firstname: "",
      lastname: "",
      email: "",
      company : "", 
      city: "", 
      gender: ""
  })


  const formik = useFormik({
    initialValues: formValues,
    onSubmit: (values) => {
      console.log("🚀 ~ UserCreate ~ values:", values)
    }
  });

  // const selectHandleChange = (e) => {
  //   console.log("🚀 ~ selectHandleChange ~ e:", e)

  //   setFormValues((formValues) => ({
  //     ...formValues,
  //     gender: e
  //   }));

  //   console.log("🚀 ~ selectHandleChange ~ formValues:", formValues)
  // }


  // const genders = [
  //   {
  //     id:1, 
  //     value:"man"
  //   },
  //   {
  //     id:2, 
  //     value:"woman"
  //   }
  // ]

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Create new user
      </Typography>
      <form className="mt-8 mb-2 w-100 max-w-screen-lg sm:w-96" onSubmit={formik.handleSubmit}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Name
          </Typography>
          <Input
            name="firstname"
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none"
            }}
            onChange={formik.handleChange}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            userName
          </Typography>
          <Input
          name="lastname"
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none"
            }}
            onChange={formik.handleChange}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Email
          </Typography>
          <Input
          name="email"
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none"
            }}
            onChange={formik.handleChange}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Company Name
          </Typography>
          <Input
          name="company"
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none"
            }}
            onChange={formik.handleChange}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            City
          </Typography>
          <Input
          name="city"
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none"
            }}
            onChange={formik.handleChange}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Gender
          </Typography>
          <Select label="Select Version" onChange={(value) => {formik.setFieldValue("gender", value)}} name="gender" value={formik.values.gender}>
            <Option value="man">Homme</Option>
            <Option value="woman">Femme </Option>
          </Select>
        </div>

        <Button className="mt-6" fullWidth type="submit">
          Ajouter
        </Button>
        <Button variant="outlined" className="mt-6" fullWidth>
          Annuler
        </Button>
      </form>
    </Card>
  );
}
