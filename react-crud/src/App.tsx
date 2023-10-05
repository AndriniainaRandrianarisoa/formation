import { useState } from "react";
import "./App.css";
import InvoiceList from "./pages/invoiceList/InvoiceList";
import User from "./pages/user/User";
import Authentification from "./pages/authentification/Authentification";
import NavHeader from "./components/navBar/NavHeader";
//import InvoiceList from "./pages/invoiceListCopy/InvoiceList";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavHeader />
   
      <Routes>
        
        <Route path="/signin" element={<Authentification />} />
        <Route path="/invoice" element={<InvoiceList />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
