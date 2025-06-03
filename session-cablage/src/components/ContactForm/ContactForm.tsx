import { useState } from 'react';

import { Message } from '../../services/interfaces/Message';
import { Author } from '../../services/interfaces/Author';

interface ContactFormProp {
    handleSubmitMessage: (message: Message) => void;
    authors: Author[]
}

export default function ContactForm(props: ContactFormProp) {

    const { handleSubmitMessage, authors } = props;

    const [form, setForm] = useState<Message>({
        title: '',
        category: '',
        message: '',
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        handleSubmitMessage(form);
    }

    function handleChange(evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        const { name, value } = evt.target;
        setForm({ ...form, [name]: value })
    }

    return (
        <>

            <form onSubmit={(evt) => handleSubmit(evt)}>
                <label htmlFor="title">Titre:</label>

                <input className="" type="text" name="title" id="title" onChange={(evt) => handleChange(evt)} />
                <br />
                <br />

                <label htmlFor="author">Auteur:</label>

                <select name="author" id="author" onChange={(evt) => handleChange(evt)}>
                    <option value="">Selectionne une categorie</option>
                    {
                        authors.map((author:Author, index:number) => (
                            <option key={index} value={`${author.firstname} ${author.lastname}`}>
                                {author.firstname} {author.lastname}
                            </option>
                        ))
                    }
                </select>

                <label htmlFor="category">Categorie:</label>

                <br />
                <br />

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