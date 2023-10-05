/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

// bootstrap element
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { SendPostForm } from "./Form/SendPostForm";
import { UpdatePostForm } from "./Form/UpdatePostForm";
import {
  getAllPosts,
  updateOnePost,
  getOnePostById
} from "../../services/api/posts";

import { Link, Router } from "react-router-dom";

import { useLocalStorage } from "../../hooks/useLocalStorage";

// import users faker
import { fakeUsers } from "./faker";

function Post() {
  const [posts, setPosts]: any = useState([]);

  const [postToUpdate, setPostToUpdate]: any = useState({});

  const KEY = "posts";

  const [updateForm, setUpdateForm]: any = useState(false);

  // use local storage
  const [storePosts, setStorePosts] = useLocalStorage(KEY, []);

  const users = fakeUsers;

  useEffect(() => {
    const loadAllPosts = async () => {
      const response = await getAllPosts();

      if (response.status == 200) {
        const first10Items = formatArray(response.data);
        const postsWithUsers = affectUser(first10Items);

        setPosts(postsWithUsers);

        //setStorePosts(postsWithUsers);
      } else {
        console.log("cacaca");
      }
    };
    loadAllPosts();
  }, []);

  const affectUser = (data) => {
    const formattedResponse = data.map((el: any) => {
      return {
        ...el,
        user: users.datas.find((element) => element.id == el.userId)
      };
    });
    return formattedResponse;
  };

  const handleSendForm = (post: any) => {
    post.user = users.datas.find((element) => element.id == post.userId);
    const postsCopy = [...posts];
    postsCopy.unshift(post);
    const first10Items = formatArray(postsCopy);
    setPosts(first10Items);
  };

  const formatArray = (posts) => {
    const first10Items = posts.slice(0, 10);
    return first10Items;
  };

  const handleOpenUpdateForm = async (id) => {
    const response = await getOnePostById(id);

    setPostToUpdate(response);
    setUpdateForm(true);
  };

  const handleShowAddForm = () => {
    setUpdateForm(false);
    const tets = "bonjour"

    // test ternaire 

    // if(test == "bonjour" ) {
    //   console.log("coucou")
    // } else {
    //   console.log("rien")
    // }


    // test == "bonjour" ? console.log("coucou") : console.log("rien")
  };

  const handleSendUpdateForm = async (newPost) => {
    const response = await updateOnePost(newPost.id, newPost);
    if (response?.status == 200) {
      response.datas.user = users.datas.find((element) => element.id == response.datas.userId);
      const postsCopy = [...posts];

      const index = postsCopy.findIndex((el) => el.id == newPost.id);
      postsCopy.splice(index, 1, response?.datas);


      setPosts(postsCopy);
      
    } 
  };

  return (
    <div className="row">
      <div className="row">
        <h1>
          Liste des articles{" "}
          <Button
            size="sm"
            variant="outline-dark"
            className="mx-1"
            onClick={handleShowAddForm}
          >
            Ajouter
          </Button>
        </h1>
        <div className="col-8">
          <ListGroup as="ol" numbered>
            {posts.map((post: any, index: any) => (
              <ListGroup.Item
                key={index}
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{post.title}</div>
                  {post.body}
                  <div> Editeur : {post.user.name}</div>
                </div>

                <Link to={`/post/${post.id}`}>
                  <Button size="sm" variant="outline-dark" className="mx-1">
                    Voir
                  </Button>
                </Link>

                <Button
                  size="sm"
                  variant="outline-danger"
                  onClick={() => handleOpenUpdateForm(post.id)}
                >
                  Modifier
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="col-4">
          {updateForm == false ? (
            <SendPostForm saveNewPost={handleSendForm} />
          ) : (
            <UpdatePostForm
              handleSendUpdateForm={handleSendUpdateForm}
              post={postToUpdate}
            />
          )}
          
          {/* <SendPostForm handleSendForm={handleSendForm} />
          <UpdatePostForm
            handleSendUpdateForm={handleSendUpdateForm}
            post={post}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Post;
