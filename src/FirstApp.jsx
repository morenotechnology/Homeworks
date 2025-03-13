import { useState } from "react";
import './App.css'
const FirstApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>Counter</h1>
      <span>{counter}</span>
      <button onClick={() => handleAdd()}>+1</button>
      <button onClick={() => handleSubtract()}>-1</button>
      <button onClick={() => handleReset()}>Reset</button>
    </>
  );
};

export default FirstApp;
