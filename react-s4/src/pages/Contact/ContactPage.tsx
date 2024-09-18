import { useState } from 'react';
import './Contact.css'
import { useFormik } from 'formik';
import { object, string, number, date, InferType } from 'yup';


interface ContactProps {
    name : string;
    myFunction : (message:string) => void;
    age : number
}

export default function ContactPage(props:any) {

    const { handleSubmitMessage } = props;


    const [form, setForm] = useState<any>({
        title: "",
        category: "",
        message: ""
    })

    let formSchema = object({
        title: string().min(2, "minimum 2 lettres").required("champs title obligatoire"),
        category: string().required(),
        message: string().required(),
    });


    const formik = useFormik({

        initialValues: form,
        validationSchema: formSchema,
   
        onSubmit: values => {
   
          alert(JSON.stringify(values));
          handleSubmitMessage(form)
   
        },
   
    });





    // function handleSubmit(e: any) {
    //     e.preventDefault();
    //     handleSubmitMessage(form)
    // }

    // function handleChange(e:any) {
    //     const { name, value } = e.target;
    //     setForm({...form, [name]: value })
    // } 

    return (
        <>
            <h1> Page des contact </h1>

            { form.title }

            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="title">Titre:</label>

                <input className="" type="text" name="title" id="title" onChange={formik.handleChange} value={formik.values.title}/>
                <small>{formik.errors.title}</small>
                <br />
                <br />

                <label htmlFor="category">Categorie:</label>

                <select name="category" id="category" onChange={formik.handleChange} value={formik.values.category}>
                    <option value="">Selectionne une categorie</option>
                    <option value="front">front</option>
                    <option value="back">back</option>
                    <option value="fullstack">fullstack</option>
                    <option value="other">Autres</option>
                </select>
                <small>{formik.errors.category}</small>
                <br />
                <br />

                <label htmlFor="message">Votre message</label>
                <br />
                <textarea name="message" id="message" onChange={formik.handleChange} value={formik.values.message}>
                
                </textarea>
                <small>{formik.errors.message}</small>
                <br />

                <input type="submit" value="Envoyer votre message" className="btn btn-secondary" />
                
            </form>

        </>
    )
}