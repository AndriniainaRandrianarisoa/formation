import { useState } from 'react';
import './Contact.css'
import { Message } from '../../interfaces/Message';
import { useFormik } from 'formik';
import { object, string, number, date, InferType } from 'yup';

interface ContactProps {
    handleSubmitMessage : (caca:Message) => void;
    title :string
}

export default function ContactPage(props:ContactProps) {

    const { handleSubmitMessage, title } = props;

    const [form, setForm] = useState<Message>({
        title: "",
        category: "",
        message: ""
    });

    const formSchema = object({
      title: string().required('le titre est obligatoire mon pote').min(2,"minimum 2 lettres"),
      category: string().required(),
      message: string().required()
    });
  
   
    const formik = useFormik({
      initialValues: form,
      validationSchema: formSchema,
      onSubmit: values => {
      console.log("🚀 ~ ContactPage ~ values:", values)
      },
 
    });



  
    return (
        <>
            <h1> Page des contact </h1>

            {form.title} {title}

            <form onSubmit={formik.handleSubmit} >
                <label htmlFor="title">Title:</label>

                <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={formik.handleChange}
                />
                <div>{formik.errors.title}</div>

                <br />
                <br />

                <label htmlFor="category">Categorie:</label>

                <select
                    name="category"
                    id="category"
                    onChange={formik.handleChange}
                >
                    <option value="">Selectionne une categorie</option>
                    <option value="front">front</option>
                    <option value="back">back</option>
                    <option value="fullstack">fullstack</option>
                    <option value="other">Autres</option>
                </select>
                <div>{formik.errors.category}</div>

                <br />
                <br />

                <label htmlFor="message">Votre message</label>
                <br />
                <textarea
                    name="message"
                    id="message"
                    onChange={formik.handleChange}
                ></textarea>
                <div>{formik.errors.message}</div>
                <br />

                <input
                    type="submit"
                    value="Envoyer votre message"
                    className="btn btn-secondary"
                />

                
            </form>



        </>
    )
}