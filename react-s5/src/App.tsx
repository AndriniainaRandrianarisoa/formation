import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/Home/HomePage'
import ContactPage from './pages/Contact/ContactPage'
import MessagePage from './pages/Message/MessagePage'
import MessageDetailPage from './pages/Message/MessageDetailPage'
import NotFoundPage from './services/utils/NotFoundPage'

import { Message } from './services/interfaces/Message'

function App() {
  
  const [messages, setMessages] = useState<Message[]>([]);

  function handleSubmitMessage(message: Message): void {
    setMessages([...messages, message]);
  }

  return (
    <>

      <Navbar />

      <Routes>

        <Route path="/" element={ <HomePage /> } />
        <Route path="/contact" element={ <ContactPage handleSubmitMessage={handleSubmitMessage} /> } />
        <Route path="/message" element={ <MessagePage messages={messages}/> } />
        <Route path="/message/:idMessage" element={ <MessageDetailPage /> } />
        
        
        <Route path="*" element={ <NotFoundPage /> } />

      </Routes>

    </>
  )
}

export default App
