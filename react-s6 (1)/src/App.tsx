import './App.css'
import { Route, Routes } from 'react-router-dom';


import HomePage from './pages/Home/HomePage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MessageDetailPage from './pages/Message/MessageDetailPage';
import NotFoundPage from './services/utils/NotFoundPage';
import PrivateRoute from './services/utils/PrivateRoute';
import UserPage from './pages/User/UserPage';

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PrivateRoute />} >
          <Route path="/message/:idMessage" element={<MessageDetailPage />} />
          <Route path="/user" element={<UserPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      
    </>

  )

}

export default App
