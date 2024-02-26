import { useState } from 'react';
import './Contact.css'
import { Message } from '../../services/interfaces/Message';

interface PropContact {
    handleSubmitMessage: (message: Message) => void;
}

export default function ContactPage(props: PropContact) {

    const { handleSubmitMessage } = props;

    const [form, setForm] = useState<Message>({
        title: '',
        category: '',
        message: '',
    });

    function handleSubmit(e: any) {
        console.log("HandleSubmit");
        e.preventDefault();
        handleSubmitMessage(form);
        setForm({ title: '', category: '', message: '' })
    }

    function handleChange(evt: any) {
        // let name = evt.target.name;
        // let value = evt.target.value;

        // Destructuring
        const { name, value } = evt.target;
        setForm({ ...form, [name]: value })
    }

    return (
        <>
            <h1> Contact Page </h1>
            
            <div className="">
                <div>
                    <form onSubmit={(evt) => handleSubmit(evt)}>
                        <label htmlFor="title">Titre:</label>

                        <input className="" type="text" name="title" id="title" value={form.title} onChange={(evt) => handleChange(evt)} />
                        <br />
                        <br />

                        <label htmlFor="category">Categorie:</label>

                        <select name="category" id="category" value={form.category} onChange={(evt) => handleChange(evt)}  >
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
                        <textarea name="message" id="message" value={form.message} onChange={(evt) => handleChange(evt)}>
                        </textarea>
                        <br />

                        <input type="submit" value="Envoyer votre message" className="btn btn-secondary" />
                    </form>
                </div>
            </div>

        </>
    )
}