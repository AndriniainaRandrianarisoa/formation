import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/products/Product";
import Contact from "./pages/contact/Contact";
import Header from "./components/header/Header";
import OneProduct from "./pages/products/OneProduct";
import Messages from "./pages/messages/Messages";
import { useState } from "react";
import { FormInterface } from "./service/interface/formInterface";

const App = () => {
  const [messages, setMessages] = useState<FormInterface[]>([])
  const getFormData = (formData: FormInterface): void => {
    console.log('App component:', formData)
    setMessages([...messages, formData])
  }
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product' element={<Product />} />
        <Route path='/product/:name' element={<OneProduct />} />
        <Route path='/contact' element={<Contact handleParentClick={getFormData} />} />
        <Route path='/messages' element={<Messages messages={messages} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;