import './App.css'
import { Route, Routes } from 'react-router-dom';
import ContactPage from './pages/Contact/ContactPage';
import HomePage from './pages/Home/HomePage';
import MessagePage from './pages/Message/MessagePage';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import { Message } from './interfaces/Message';
import MessageDetailPage from './pages/Message/MessageDetailPage';

function App() {

  const [messages, setMessages] = useState<Message[]>([]);
  const test = "coucou"

  function handleSubmitMessage(caca: Message) {
    console.log(caca)
    setMessages([...messages, caca]);
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage  />} />

        <Route path="/contact" element={<ContactPage title='coucou' handleSubmitMessage={handleSubmitMessage}     />} />

        <Route path="/message" element={<MessagePage messages={messages} />} />

        <Route path="/message/:idMessage/:idUser" element={<MessageDetailPage />} />
      </Routes>
    </>

  )

}

export default App
