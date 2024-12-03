import { useParams } from "react-router-dom";

export default function MessageDetailPage() {
    const { idMessage, idUser } = useParams();
    console.log(idMessage, idUser)
    return (
        <>
            <p> Message Detail Page</p>
        </>
    )

}
