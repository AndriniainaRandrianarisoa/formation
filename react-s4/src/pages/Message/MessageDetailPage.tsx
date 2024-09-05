import { useParams } from "react-router-dom"

export default function MessageDetailPage() {

    const {idMessage} = useParams();
    console.log(idMessage)

    return(
        <>
            <h1> Page du détail d'un message </h1>
        </>
    )
}