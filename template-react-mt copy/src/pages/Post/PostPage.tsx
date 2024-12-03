import React, { useEffect, useState } from 'react'
import { getPosts } from '../../services/api/posts'
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';


const PostPage = () => {

  const [test, setTest] = useState(true)
  const [posts, setPosts] = useState([])


  useEffect(() =>  {
    // je vais appeler la fonction qui va executer la requete http
    const loadPosts = async () => {
      const response = await getPosts()
      console.log("🚀 ~ loadPosts ~ response:", response.PostData.datas)
      setPosts( response.PostData.datasgv )
    }
   
    loadPosts()
  }, [])


  return (
    <>
      <h1>Liste des articles</h1>
      <ul>
        {posts.map((post, index) => (
          <li>
          <div><Link to={`/postDetail/${post.id}`}> Numero : {post.id} </Link></div>
          <div>Nom de l'article : {post.title}</div>  
          <div>Contenu :  {post.body}</div>  
          <div>Auteur : {post.userId.firstname} </div>  
        </li>
        ))}

        
        
      </ul>
    </>
  )
}

export default PostPage