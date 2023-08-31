import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/navBar/NavBar";
import UserList from "./pages/invoiceList/InvoiceList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <UserList/>
    </>
  );
}

export default App;
