import { useEffect, useState } from "react";
import { getAllStudent } from "../../services/api/student";

export default function HomePage() {
  

  // useEffect(() => {
  //   const loadPosts = async () => {
  //     const response = await getAllStudent();
  //     console.log("🚀 ~ loadPosts ~ response:", response);
      
  //   };

  //   loadPosts();
  // }, []);


    return (
        <>
            <h1> Home Page Liste des etudiant</h1>
            <p> Ceci est la page d'accueil </p>
        </>
    )
}