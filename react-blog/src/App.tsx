// all import file meta data
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { PostDetail } from "./pages/Post/PostDetail";
import User from "./pages/User/User";
import Exemple from "./pages/Exemple/exemple";
import Product from "./pages/Product/Product";

function App() {
  return (
    // all html using jsx
    <>
      <Navbar />
   

      <div className="p-5">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/user" element={ <User/>} />
          <Route path="/product" element={ <Product />}/>
        </Routes>
      </div>

      {/* <Footer /> */}
      

    </>


  );
}

export default App;
