// all import file meta data
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import InfoContact from "./pages/InfoContact/InfoContact";

function App() {
  return (
    // all html using jsx
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info/:id" element={<InfoContact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
