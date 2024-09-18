import './App.css'
import { Route, Routes } from 'react-router-dom';
import ContactPage from './pages/Contact/ContactPage';
import HomePage from './pages/Home/HomePage';
import MessagePage from './pages/Message/MessagePage';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import MessageDetailPage from './pages/Message/MessageDetailPage';

function App() {

  const [messages, setMessages] = useState<any>([]);

  function handleSubmitMessage(message: any) {
    setMessages([...messages, message]);
  }


  // Interface 

  const name:string = "Alban"
  const age:number = 21;
  const isAdult:boolean = true;
  const birth:Date = new Date();

  function computeAge(birth:Date, name:string):void {}

  function getAge():number {
      return 19
  }

  interface IdentityCard {
    name:string;
    age:number;
    city:string;
  }

  const identityCard:IdentityCard = {
    name:"Alban",
    age : 22,
    city: 'Thirons Gardais',
  }

  const listIdentityCard: IdentityCard[] = [
    {
      name:"Alban",
      age : 22,
      city: 'Thirons Gardais',
    },
    {
      name:"Paul",
      age : 25,
      city: 'Thirons Gardais'
    }
  ]

  const [form, setForm] = useState<IdentityCard[]>([])



  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage handleSubmitMessage={handleSubmitMessage} />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="/message/:idMessage" element={<MessageDetailPage />} />
      </Routes>
    </>

  )

}

export default App
