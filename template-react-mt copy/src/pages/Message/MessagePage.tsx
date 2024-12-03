import { Message } from "../../services/interfaces/Message";

export default function MessagePage(props: any) {

    const { messages } = props;

    return (
        <>
            <h1> Message Page</h1>
            <p> Ceci est la page des messages</p>

            {
                messages.map((message: Message, index: number) => (
                    <div key={index}>
                        <h2> Titre : {message.title} </h2>
                        <h2> Catégorie : {message.category} </h2>
                        <h2> Message : {message.message} </h2>
                    </div>
                ))
            }

        </>
    )
}