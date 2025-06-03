import { Route, Routes } from "react-router-dom";

import UserList from "./pages/User/UserList";

import NotFoundPage from "./services/utils/NotFoundPage";
import PrivateRoute from "./services/utils/PrivateRoute";
import { UserCreate } from "./pages/User/UserCreate";
import "./App.css";
import StudentList from "./pages/Student/StudentList";
import { Signin } from "./pages/Auth/Signin";


function App() {
  return (
    <>
     
      <div className="p-5">
        <Routes>
          <Route element={<PrivateRoute />}>
           <Route path="/signin" element={<Signin />}  />
            <Route path="/user" element={<UserList />}  />
            <Route path="/create-user" element={ <UserCreate/>} />
            <Route path="/student" element={ <StudentList/>} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
       
        </Routes>


      </div>
     
    </>
  );
}

export default App;
