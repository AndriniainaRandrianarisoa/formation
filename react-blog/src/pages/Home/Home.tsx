/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

// bootstrap element
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { SendMessageForm } from "./Form/SendMessageForm";
import CardImg from "react-bootstrap/CardImg";

import { fakeMessages } from "./faker";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { createNewMessage } from "../../services/api/messages";

interface messageInterface {
  content: string,
  subject: string
}




function DefaultExample() {
  const test : string = "coucoucoucoucoucocuocu";


  const [messages, setMessages]: any = useState([{
    _id: "507f191e810c19729de860ea",
    subject: "Message 1",
    content : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
    date: new Date('2023-06-10')
  }, 
  {
    _id: "507f191e810c19729de860ds",
    subject: "Message 2",
    content : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
    date: new Date('2023-05-13')
  },
  {
    _id: "507f191e810c19729de860e123",
    subject: "Message 3",
    content : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
    date: new Date('2023-02-01')
  },
  {
    _id: "507f191e810c19729de860egj",
    subject: "Message 4",
    content : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
    date: new Date('2023-03-02')
  },
  {
    _id: "507f191e810c19729de860GDS",
    subject: "Message 5",
    content : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
    date: new Date('2023-02-20')
  }]);
  const KEY = "posts";
  const [posts, setPosts]: any = useLocalStorage(KEY, []);

  // useEffect(() => {
  //   // function who get list of messages
  //   const loadMessages = async () => {
  //     const response = fakeMessages.datas;
  //     sortDate(response);
  //     setMessages(response);
  //   };
  //   loadMessages();
  // }, []);

  useEffect(() => {
    // function who get list of posts in local storage
    setPosts(posts.slice(0, 3));
  }, []);

  const sortDate = (messages) => {
    // function who sort messages array by date
    messages.sort((a, b) => b.date.getTime() - a.date.getTime());
    return messages;
  };

  const handleSendForm = async (message: messageInterface) => {
    console.log("🚀 ~ handleSendForm ~ message:", message)
    // try {
    //   const response = await createNewMessage(message);
    //   const messagesCopy = [...messages];
    //   messagesCopy.push({ ...response.datas, date: new Date() });
    //   sortDate(messagesCopy);
    //   setMessages(messagesCopy);
    // } catch (err) {
    //   console.log("🚀 ~ file: Home.tsx:47 ~ handleSendForm ~ err:", err);
    // }

    // functiuon who save in messages array new messages
   
  };

  return (
    <div>
      <h1>Boite de reception</h1>
      <div className="row">
        <div className="col">
          <ListGroup as="ol" numbered>
            {messages.map((message: any, index: any) => (
              <ListGroup.Item
                key={index}
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{message.subject}</div>
                  {message.content}
                </div>
                <Button size="sm" variant="outline-dark">
                  Voir
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="col">
          <SendMessageForm prout={handleSendForm} propsTest={test}/>
        </div>
        <div className="mt-3">
          <Card className="p-3">
            <Card.Title>Les 3 derniers Articles</Card.Title>
            <Card.Body>
              {posts.length <= 0 ? (
                "Aucun article a afficher"
              ) : (
                <Card style={{ width: "15rem" }}>
                  <CardImg
                    variant="top"
                    src="../../assets/img/undraw_article.png/100px180"
                  />

                  <Card.Body>
                    <Card.Title>Article 1</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button size="sm" variant="outline-dark">
                      Voir
                    </Button>
                  </Card.Body>
                </Card>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DefaultExample;
