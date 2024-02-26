import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import ContactPage from "./pages/Contact/ContactPage";
import MessagePage from "./pages/Message/MessagePage";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const text = "coucou je suis la props";

  const [messages, setMessage] = useState([
    { id: 1,  title: "dgDnxcvbnS", category: "hbhgSDFH", content: "dgdggdsSD" },
    { id: 2, title: "dgDcvbnxcvS", category: "hbhgSDFH", content: "dgdggdsSD" },
    { id: 3, title: "dgDbcnm.S", category: "hbhgSDFH", content: "dgdggdsSD" },
    { id: 4, title: "d.kjg;gjkgDS", category: "hbhgSDFH", content: "dgdggdsSD" }
  ]);

  function coucou(message) {
    setMessage(message);
  }

  function recup(text) {
    console.log("recupp", text);
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/contact"
          element={<ContactPage message={text} sendToParent={recup} />}
        />
        <Route path="/message" element={<MessagePage />} />
      </Routes>

      {messages.map((item, index) => (
        <div key={item.id}>
          <p>title {item.id}</p>
          <p>title {item.title}</p>
          <p> category{item.category}</p>
          <p>content {item.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
