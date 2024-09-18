import './HomePage.css';

export default function HomePage() {

  const test = false 
  const role = "invit"

  const functionTest = () => {

    // if (test == false ) {
    //   console.log("coucou")
    // } else {
    //   console.log("salut")
    // }

    if (test == false ) {
      console.log("coucou")
    } 


    test == false ? console.log("coucou") : console.log("salut")


  }

    return(
        <>  
          {role == 'admin' ?  <h1> Page d'accueil de l'organisateur</h1> : <h1> Page d'accueil de la personne qui participe a l'event</h1> }
          {role == "admin" && <h1> Page d'accueil de l'organisateur</h1>}
            
        </>
    )
}