import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home/HomePage'
import ContactPage from './pages/Contact/ContactPage'
import MessagePage from './pages/Message/MessagePage'
import NavBar from './components/Navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  
  function handleAddMessage(message:any) {
    console.log(message);
  }

  return (
    <>
 
      <div>

      <NavBar />

       <Routes>
          <Route path="/" element= { <HomePage/> }/>
          <Route path="/contact" element= { <ContactPage handleAddMessage={handleAddMessage} /> }/>
          <Route path="/message" element= { <MessagePage/> } />
       </Routes>

      </div>
    </>
  )
}

export default App
