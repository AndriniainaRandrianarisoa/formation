import { Button, Card } from "react-bootstrap";

export default function HomePage() {


    
  return (
    <>
      <h2> Page d'accueil </h2>
      <div> Ceci est la page d'accueil</div>
      {new Date().toISOString()}

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://place-hold.it/300x300" />
        <Card.Body>
          <Card.Title>  </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

    </>
  );
}
