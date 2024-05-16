import { useEffect, useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState<number>(0);
  const [condition, setCondition] = useState(true);

  const [test, setTest] =  useState("coucoucou");

  useEffect(() => {
    // UseEffect executé uniquement quand la page est monté
    console.log("useEffect 1");
  }, []);

  useEffect(() => {
    // UseEffect avec dépendances
    console.log("useEffect 2");
  }, [count]);

  useEffect(() => {
    // Modification du Dom
    document.title = "PAGE";
  }, []);

  useEffect(() => {
    // UseEffect avec fonction de nettoyafe (pour éviter les fuites réseaux)
    const timerId = setInterval(() => {
      console.log("SetInterval");
    }, 2000);

    return () => {
      console.log("return useEffect");
      clearInterval(timerId);
    };
  }, []);

  // si false => tu affiche =>  ceci est mon test false
  // si false => tu affiche =>  ceci est mon test true

  const reverse = () => {
    //let reverse = true;
    //setCondition(!condition)
    setTest("test")
    console.log("🚀 ~ reverse ~ test:", test)
  };

  return (
    <>
    {test}
      <h1> Home Page </h1>
      <p> Ceci est la page d'accueil </p>
      {count} <br></br>
      <button onClick={() => setCount(count + 1)}> Ajouter </button>
      {/* { condition && <p> Ceci est mon test en false </p> } */}
      {!condition ? (
        <p> Ceci est mon test en false </p>
      ) : (
        <p> Ceci est mon test en true </p>
      )}
      <button onClick={() => reverse()}> Reverse </button>
    </>
  );
}
