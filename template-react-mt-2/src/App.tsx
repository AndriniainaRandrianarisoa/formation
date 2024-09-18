import { Route, Routes } from "react-router-dom";

import UserList from "./pages/User/UserList";

import NotFoundPage from "./services/utils/NotFoundPage";
import PrivateRoute from "./services/utils/PrivateRoute";
import { UserCreate } from "./pages/User/UserCreate";
import "./App.css";


function App() {
  return (
    <>
     
      <div className="p-5">
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/user" element={<UserList />}  />
            <Route path="/create-user" element={ <UserCreate/>} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>


      </div>
     
    </>
  );
}

export default App;
