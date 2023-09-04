import React, { useState } from "react";

const Home = () => {
  // script

  //let title = "MON PROJET REACT";
  const [title, setTitle] = useState("MON PROJET REACT");
  const [count, setCount] = useState(0)


  const handleClick = () => {
    // let value = count
    // value++
    // setCount(value)

    setCount((count) => count + 1)
  };


  return (
    // jsx hmtl

    <>
      {count}
      <h1>{title}</h1>

      <div className="card">
        <button onClick={handleClick}>Button</button>
      </div>
    </>
  );
};

export default Home;
