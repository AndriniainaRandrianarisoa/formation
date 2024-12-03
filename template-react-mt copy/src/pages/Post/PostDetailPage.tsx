import React, { useEffect, useState } from 'react'
import { getPostById} from '../../services/api/posts'
import { useParams } from "react-router-dom";


const PostDetailPage = () => {
  const [post, setPost] = useState([])

  // recuprer l'id dans l'url 
  const {param} = useParams()


  useEffect(() =>  {
    const loadPosts = async () => {
      const response = await getPostById(param)
      console.log("🚀 ~ loadPosts ~ response:", response)
      setPost(response)
    }
   
    loadPosts()
  }, [])


  

  return (
    <>
      <h1>Detail d'un article</h1>
      <ul>
        <li>
          <div>Numero : {post.id}</div>
          <div>Nom de l'article : {post.title}</div>  
          <div>Contenu :  {post.body}</div>  
          <div>Auteur : {post.userId} </div>  
        </li>

      </ul>
    </>
  )
}

export default PostDetailPage