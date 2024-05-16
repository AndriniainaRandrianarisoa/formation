import { useState } from 'react';
import { Author } from '../../services/interfaces/Author';
import { createPost } from '../../services/api/posts';

interface PropAuthorPage {
    handleSubmitAuthor: (author: Author) => void;
}

export default function AuthorPage(props: PropAuthorPage) {

    const { handleSubmitAuthor } = props;

    const [form, setForm] = useState<Author>({
        firstname: '',
        lastname: ''
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        //handleSubmitAuthor(form);
        createPost(form)
    }

    function handleChange(evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        const { name, value } = evt.target;
        setForm({ ...form, [name]: value }) 
    }

    return (
        <>

            <form onSubmit={(evt) => handleSubmit(evt)}>
                <label htmlFor="title">Les Auteur:</label>

                <input className="" type="text" name="firstname" id="firstname" onChange={(evt) => handleChange(evt)} />
                <br /> <br />
                
                <input className="" type="text" name="lastname" id="lastname" onChange={(evt) => handleChange(evt)} />
                <br />

                <input type="submit" value="Envoyer votre message" className="btn btn-secondary" />
            </form>

        </>
    )
}
