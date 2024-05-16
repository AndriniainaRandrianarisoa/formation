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
      //handleSubmitMessage(values);
    },

  });

    // function handleSubmit(e: any) {
    //     console.log("HandleSubmit");
    //     e.preventDefault();
    //     handleSubmitMessage(form);
    // }

    // function handleChange(evt: any) {
    //     console.log("🚀 ~ handleChange ~ evt:", evt.target.name)
    //     console.log("🚀 ~ handleChange ~ evt:", evt.target.value)
    //     // let name = evt.target.name;
    //     // let value = evt.target.value;

    //     // Destructuring
    //     const { name, value } = evt.target;
    //     setForm({ ...form, [name]: value })
        
    // }

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
                        <br />
                        <br />

                        <label htmlFor="category">Categorie:</label>

                        <select name="category" id="category" onChange={handleChange} value={values.category}>
                            <option value="">Selectionne une categorie</option>
                            <option value="front">front</option>
                            <option value="back">back</option>
                            <option value="fullstack">fullstack</option>
                            <option value="other">Autres</option>
                        </select>
                        <small>{errors.category}</small>
                        <br />
                        <br />

                        <label htmlFor="message">Votre message</label>
                        <br />
                        <textarea name="message" id="message"  onChange={handleChange} value={values.message}>
                        </textarea>
                        <small>{errors.message}</small>
                        <br />

                        <input type="submit" value="Envoyer votre message" className="btn btn-secondary" />
                    </form>
                </div>
            </div>

        </>
    )
}