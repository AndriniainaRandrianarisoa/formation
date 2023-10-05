import { useState } from 'react'
//import './index.css'
import User from "./pages/user/User"
import NavBar from "./components/navBar/NavBar"

function App() {
  

  return (
    <>
<NavBar/>
<div className="p-12">
      
      <User/>

    </div>
    
    
    </>
   
    
  )
}

export default App
