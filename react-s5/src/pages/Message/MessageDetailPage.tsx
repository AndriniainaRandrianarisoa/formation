import { useParams } from "react-router-dom";

export default function MessageDetailPage() {

    const { idMessage  } = useParams();
    console.log(idMessage)

    return (
        <>
            <h1> Message Détail Page</h1>
            <p> Ceci est la page des détails de messages</p>
            { idMessage }
        
        </>
    )
}