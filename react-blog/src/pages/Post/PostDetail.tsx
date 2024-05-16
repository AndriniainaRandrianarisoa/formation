import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getOnePostById } from "../../services/api/posts";

// import bootstrap component
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const PostDetail = () => {
  
  const [post, setPost] = useState({});

  useEffect(() => {
    const findContact = async () => {
      const response = await getOnePostById(id);
      setPost(response);
    };

    findContact();
  }, []);

  return (
    <div>
      <h1>Detail d'un article</h1>
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
