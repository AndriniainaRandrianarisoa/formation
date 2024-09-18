import { useParams } from "react-router-dom";

export default function MessageDetailPage() {
  const { idMessage, idUser } = useParams();
  console.log(idMessage, idUser);

  return (
    <>
      <h1> Message Detail Page</h1>
      {idMessage}
      <p> Ceci est la page des détails de messages hdfsHSDHDSGHDSHDSHds</p>
    </>
  );
}
