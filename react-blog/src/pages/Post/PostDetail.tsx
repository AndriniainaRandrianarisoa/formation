import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getOnePostById } from "../../services/api/posts";

// import bootstrap component
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const PostDetail = () => {

  // const {id} = useParams()
  // console.log("🚀 ~ PostDetail ~ id:", id)
  
  const [post, setPost] = useState({});


  useEffect(() => {
    console.log("coucou du useEffect")
    const findContact = async () => {
      const response = await getOnePostById(id);
      setPost(response);
    };

    findContact();
  }, []);

  const {id} = useParams()

  const test =() => {
    console.log("coucoucou")
  }

  // life cycle component 

  // montage mounted()
  // => console.log("🚀 ~ PostDetail ~ id:", id)
  // => test ()

  // update()
  // useEffect
  // set

  // mort unmounted

  test ()

  return (
    <div>
      <h1>Detail d'un article {id}</h1>
      <div className="mt-5">
        <Card>
          <Card.Header as="h5">{post.title}</Card.Header>
          <Card.Body>
            <Card.Title>Editeur : {post.userId}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Link to={`/post`}>
              <Button size="sm" variant="outline-dark" >
                Retour
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
