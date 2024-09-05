import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home/HomePage'
import ContactPage from './pages/Contact/ContactPage'
import MessagePage from './pages/Message/MessagePage'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react'
import { Message } from './services/interfaces/Message'
import NotFoundPage from './services/utils/NotFoundPage'
import MessageDetailPage from './pages/Message/MessageDetailPage'
import TodosPage from './pages/Todo/TodoPage';

function App() {
  
  const [messages, setMessages] = useState<Message[]>([]);

  function handleSubmitMessage(message: Message):void {
    setMessages([...messages, message]);
  }

  return (
    <>

      <Navbar />

      <Routes>

        <Route path="/" element={ <HomePage /> } />

        <Route path="/contact" element={ <ContactPage user="Amine" handleSubmitMessage={handleSubmitMessage} /> } />

        <Route path="/message" element={ <MessagePage messages={messages}/> } />

        <Route path="/message/:idMessage/user/:idUser" element={ <MessageDetailPage/> } />

        <Route path="/todo" element={ <TodosPage /> } />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>

    </>
  )
}

export default App
