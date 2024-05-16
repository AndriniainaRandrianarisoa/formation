import { useState } from 'react';
import './Contact.css'
import { Message } from '../../services/interfaces/Message';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface PropContact {
    handleSubmitMessage: (message: Message) => void;
    user : string;
}

export default function ContactPage(props: PropContact) {

  const { handleSubmitMessage } = props;

  const [form, setForm] = useState<Message>({
    title: 0,
    category: '',
    message: '',
  });

  const dataSchema = Yup.object({
    title: Yup.number().min(5, "minimum 5 caracters").required("Champs obligatoire").typeError("Type nombre obligatoire"),
    category: Yup.string().required("Champs obligatoire"),
    message:Yup.string().min(5,"minimum 5 caracters").required("Champs obligatoire"),
  });


  const {handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: form,
    validationSchema : dataSchema,
    onSubmit: values => {
      console.log("🚀 ~ ContactPage ~ values:", values)
      
    },

  });
    return (
        <>
            <h1> Contact Page </h1>

            {form.title}

            <div className="">
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Titre:</label>

                        <input className="" type="text" name="title" id="title" onChange={handleChange}  value={values.title} />
                        <small>{errors.title}</small>
            
                        <input type="submit" value="Envoyer votre message" className="btn btn-secondary" />
                    </form>
                </div>
            </div>

        </>
    )
}