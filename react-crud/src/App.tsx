import { useState } from "react";
import "./App.css";
import NavBar from "@/components/navBar/NavBar";
import InvoiceList from "./pages/invoiceList/InvoiceList";
//import InvoiceList from "./pages/invoiceListCopy/InvoiceList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <InvoiceList />
    </>
  );
}

export default App;
