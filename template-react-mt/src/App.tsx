import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import UserList from "./pages/User/UserList";
import UserDetail from "./pages/User/UserDetail";
import { NavBar } from "./components/Navbar/Navbar";
import NotFoundPage from "./services/utils/NotFoundPage";
import PrivateRoute from "./services/utils/PrivateRoute";
import PostDetailPage from "./pages/Post/PostDetailPage";
import { UserCreate } from "./pages/User/UserCreate";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Signin } from "./pages/Auth/Signin";
import StudentPage from "./pages/Student/StudentPage";


function App() {
  return (
    <>
      <NavBar />
      <div className="p-5">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/create-user" element={ <UserCreate/>} />
          <Route path="/product" element={<PostDetailPage />} />
          <Route path="/student" element={<StudentPage />} />

          <Route path="/signin" element={ <Signin/>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* <Footer /> */}

      </div>
     
    </>
  );
}

export default App;
