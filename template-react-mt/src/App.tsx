import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import UserList from "./pages/User/UserList";
import UserDetail from "./pages/User/UserDetail";
import { NavBar } from "./components/Navbar/Navbar";
import NotFoundPage from "./services/utils/NotFoundPage";
import PrivateRoute from "./services/utils/PrivateRoute";
import PostDetailPage from "./pages/Post/PostDetailPage";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/product" element={<PostDetailPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
