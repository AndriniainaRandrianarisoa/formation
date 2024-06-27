import { useState } from 'react';
import './Contact.css';
import { Message } from '../../services/interfaces/Message';
import { createUser } from '../../services/api/user';

interface ContactProps {
    handleSubmitMessage: (message:Message) => void;
}

export default function ContactPage(props:ContactProps) {

    const { handleSubmitMessage } = props;

    const [form, setForm] = useState<Message>({
        title: "dévéloppeur",
        category: "",
        message: "",
    })

    function handleSubmit(e: any) {
        e.preventDefault();
        handleSubmitMessage(form)
        createUser(form)
    }

    function handleChange(e:any) {
        const { name, value } = e.target;
        setForm( {...form, [name]: value} )
    }

    return (
        <>
            <h1> Page des contact </h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Titre:</label>

                <input className="" type="text" name="title" id="title" onChange={(evt) => handleChange(evt)}/>
                <br />
                <br />

                <label htmlFor="category">Categorie:</label>

                <select name="category" id="category" onChange={(evt) => handleChange(evt)}>
                    <option value="">Selectionne une categorie</option>
                    <option value="front">front</option>
                    <option value="back">back</option>
                    <option value="fullstack">fullstack</option>
                    <option value="other">Autres</option>
                </select>
                <br />
                <br />

                <label htmlFor="message">Votre message</label>
                <br />
                <textarea name="message" id="message" onChange={(evt) => handleChange(evt)}>
                </textarea>
                <br />

                <input type="submit" value="Envoyer votre message" className="btn btn-secondary" />
            </form>

        </>
    )
}