import { useState } from "react"

export default function HomePage() {

  //let text = "coucou Ange tu es le plus beau"
  const [text, setText] = useState("coucou Ange tu es le plus beau")

  const handleChangeText = () => {
    // text = 
    setText("Erik c'est toi le meilleur")
   
  }

  return (

    <>
      <h1> Home Page </h1>
      <p> Ceci est la page d'accueil </p>
      <p>{text}</p>
      <button onClick={handleChangeText}>
        BUTTON 
      </button>
    </>


  );
}
