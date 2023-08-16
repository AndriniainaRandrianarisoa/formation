import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home/HomePage'
import ContactPage from './pages/Contact/ContactPage'
import MessagePage from './pages/Message/MessagePage'
import NavBar from './components/Navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  
  const STORAGE_KEY = "message";
  const [storedMessages, setStoredMessages] = useLocalStorage(STORAGE_KEY, []);


  const [messages, setMessages]:any = useState([]);

  function handleAddMessage(message:any) {
    setMessages([...messages, message])
  }

  useEffect(() => {
    console.log('coucou useEffect1');
    setStoredMessages(messages);
  }, []);

 
  useEffect(() => {
    console.log('coucou useEffect messages');
    setMessages(storedMessages);
  }, [messages]);



  return (
    <>
 
      <div>

      <NavBar />

       <Routes>
          <Route path="/" element= { <HomePage/> }/>
          <Route path="/contact" element= { <ContactPage handleAddMessage={handleAddMessage}  /> }/>
          <Route path="/message" element= { <MessagePage messages={messages} /> } />
       </Routes>

      </div>
    </>
  )
}

export default App
