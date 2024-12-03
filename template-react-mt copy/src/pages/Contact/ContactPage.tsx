
import { Message } from '../../services/interfaces/Message';
import { Author } from '../../services/interfaces/Author';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';

interface ContactPage {
    handleSubmitMessage: (message: Message) => void;
    authors: Author[];
}

export default function ContactPage(props: ContactPage) {

    const { handleSubmitMessage, authors } = props;

    return (
        <>
            <h1> Contact Page </h1>
            <ContactForm handleSubmitMessage={handleSubmitMessage} authors={authors}/> 
        </>
    )
}