import { Route, Routes } from "react-router-dom";
import "./App.css";

import ContactPage from "./pages/Contact/ContactPage";
import HomePage from "./pages/Home/HomePage";
import MessagePage from "./pages/Message/MessagePage";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  /*
    let firstname:any = "Amine";
    let age:number = 18;
    let isAdult:boolean = true;
  
    let listNumber:Array<number> = [1,2,3]
    let listNumber2:(number|string)[]  = [1,2,"3"]
  
    function isTall(size:number):boolean { return true }
    function updateSize():void {}
  */

  let a = 10;
  let b = a;
  b = 8;

  console.log(a);
  console.log(b);

  let c = {
    title: "Air"
  };

  let d = c;
  c.title = "Terre";

  console.log(c);
  console.log(d);

  let e = {
    title: "Air"
  };

  let f = { ...e };

  f.title = "Coucou";

  console.log(e);
  console.log(f);

  const [messages, setMessages] = useState([
    { id: 1, title: "message 1", message: "dHDFHADFJj" },
    { id: 2, title: "message 2", message: "dHDFHADFJj" },
    { id: 3, title: "message 3", message: "dHDFHADFJj" },
    { id: 4, title: "message 4", message: "dHDFHADFJj" }
  ]);

  const coucou = (newForm) => {
    console.log("coucoucou", newForm)
  }


  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage handleSendForm= {coucou} />} />
        <Route path="/contact" element={<ContactPage handleSendForm = {coucou}/>} />
        <Route path="/message" element={<MessagePage prout={messages} />} />
      </Routes>
    </>
  );
}

export default App;
