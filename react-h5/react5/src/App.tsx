import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home/HomePage'
import ContactPage from './pages/Contact/ContactPage'
import MessagePage from './pages/Message/MessagePage'
import NavBar from './components/Navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import { getTodos } from './services/api/todo';
import { createPost } from './services/api/post';
import SignPage from './pages/Sign/SignPage'
import PrivateRoutes from './services/utils/PrivateRoute'
import NotFoundPage from './services/utils/NotFoundPage'

function App() {
  
  const STORAGE_KEY = "message";
  const [storedMessages, setStoredMessages] = useLocalStorage(STORAGE_KEY, []);
  const [messages, setMessage]:any = useState([]);
  
  function handleAddMessage(message:any) {
    setMessage([...messages, message]);
  }

  useEffect(() => {

    setMessage(storedMessages);

    async function loadTodo() {
      const listTodos = await getTodos();
      setTodos(listTodos)
      //console.log(listTodos);
    }
   
    loadTodo();
  
  }, []);


  useEffect(() => {

    setStoredMessages(messages);

    async function generatePost() {
      const result = await createPost();
      //console.log(result);
    }

    generatePost();
    
  }, [messages]);

  return (
    <>
 
      <div>

      <NavBar />

       <Routes >

        <Route element= { <PrivateRoutes/> }>

          <Route path="/" element= { <HomePage/> }/>
          <Route path="/contact" element= { <ContactPage handleAddMessage={handleAddMessage}  /> }/>
          <Route path="/message" element= { <MessagePage messages={messages} /> } />

        </Route>

        <Route path="/sign" element= { <SignPage/> }/>
        <Route path="*" element= { <NotFoundPage/> }/>

       </Routes>

      </div>
    </>
  )
}

export default App
