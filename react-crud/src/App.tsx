import { useState } from "react";
import "./App.css";
import InvoiceList from "./pages/invoiceList/InvoiceList";
import NavHeader from "./components/navBar/NavHeader";
//import InvoiceList from "./pages/invoiceListCopy/InvoiceList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavHeader />
      <div className="p-8">
        <InvoiceList />
      </div>
    </>
  );
}

export default App;
