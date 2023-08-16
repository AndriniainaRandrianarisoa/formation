import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/Home/HomePage";
import ContactPage from "./pages/Contact/ContactPage";
import MessagePage from "./pages/Message/MessagePage";
import NavBar from "./components/Navbar/NavBar";
import { useEffect, useState } from "react";
import { useLocalStorage } from './hooks/useLocalStorage'


function App() {
  const [messages, setMessages] = useState<any>([]);
  const KEY = 'message'
  const [storedMessages , setStoredMessages ] = useLocalStorage(KEY , [])



  function handleAddMessage(message: any) {
    console.log("handleAddMessage");
    setMessages([...messages, message]);
    console.log(messages);
  }




  useEffect(() => {
    setStoredMessages(messages)

  }, []);


  useEffect(() => {
    //console.log("useEffect changement");

  }, [messages]);


  return (
    <>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/contact"
            element={
              <ContactPage
                handleAddMessage={handleAddMessage}
                lastname="Sacha"
              />
            }
          />
          <Route
            path="/message"
            element={<MessagePage messages={messages} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
