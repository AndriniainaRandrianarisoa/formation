import { useState } from 'react';
import './Contact.css';
import { Message } from '../../services/interfaces/Message';
import { useFormik } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import * as Yup from 'yup';

interface ContactProps {
    handleSubmitMessage: (message:Message) => void;
}

export default function ContactPage(props:ContactProps) {

    const { handleSubmitMessage } = props;


    // const [form, setForm] = useState<Message>({
    //     title: "",
    //     category: "",
    //     message: "",
    // })

    const [tab, setTab] = useState([])

    let contactSchema = Yup.object({
      title: Yup.string().required(`Champs category`).min(2, "minimum 2 caracters"),
      category:Yup.string().required("Champs category obligatoire"),
      message: Yup.string().required("Champs message obligatoire"),
    });


    // function handleSubmit(e: any) {
    //     e.preventDefault();
    //     handleSubmitMessage(form)
    // }

    // function handleChange(e:any) {
    //     const { name, value } = e.target;
    //     setForm( {...form, [name]: value} )
    // }

    const {handleSubmit,handleChange,values,errors} = useFormik({
      
      initialValues:{
        title: "",
        category: "",
        message: "",
      },
      validationSchema: contactSchema,
      onSubmit: values => {
        console.log("🚀 ~ ContactPage ~ values:", values)
        // handleSubmitMessage(values)
        let tab2 = tab
        tab2.push(values)
        setTab(tab2)
      },
      
    });
    
    return (
        <>
            <h1> Page des contact </h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Titre:</label>

                <input className="" type="text" name="title" id="title" onChange={handleChange}   value={values.title}/>
                <small>{errors.title }</small>
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
                <small>{errors.category }</small>
                <br />
                <br />

                <label htmlFor="message">Votre message</label>
                <br />
                <textarea name="message" id="message" onChange={handleChange} value={values.message}>
                </textarea>
                <small>{errors.message }</small>
                <br />

                <input type="submit" value="Envoyer votre message" className="btn btn-secondary" />
            </form>

        </>
    )
}