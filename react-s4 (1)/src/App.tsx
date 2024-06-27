import './App.css'
import { Route, Routes } from 'react-router-dom';
import ContactPage from './pages/Contact/ContactPage';
import HomePage from './pages/Home/HomePage';
import MessagePage from './pages/Message/MessagePage';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import MessageDetailPage from './pages/Message/MessageDetailPage';
import NotFoundPage from './services/utils/NotFoundPage';
import PrivateRoute from './services/utils/PrivateRoute';

function App() {
  const [messages, setMessages] = useState<any[]>([])

  function handleSubmitMessage(form: any) {
    console.log(form);
    setMessages([...messages, form])
  }

  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route element={<PrivateRoute />} >
          <Route path="/contact" element={<ContactPage handleSubmitMessage={handleSubmitMessage} />} />
          <Route path="/message" element={<MessagePage messages={messages} />} />
          <Route path="/message/:idMessage" element={<MessageDetailPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>

  )

}

export default App
