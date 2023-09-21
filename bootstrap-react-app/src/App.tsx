import { useState,useEffect } from "react";
import BrandExample from "./components/navBar/NavBar";
//import './App.css'
import ListGroup from "react-bootstrap/ListGroup";

function App() {
  const [count, setCount] = useState(0);
  const [test, setTest] = useState(0);

  //let test = 0;

  const caca = () => {
    let copy = test;
    copy++;
    setTest(copy);
  };


  
  useEffect(() => {
    console.log("caca")
  },[test])








  return (
    <div className="App">
      <BrandExample></BrandExample>
      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <div>{test}</div>

      <button onClick={caca}>coucou</button>
    </div>
  );
}

export default App;
