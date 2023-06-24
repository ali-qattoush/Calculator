import { useState } from "react";
import { evaluate } from 'mathjs';
import "./App.css";

function App() {
  const [displayValue, setDisplayValue] = useState("");

  const handleButtonClick = (value) => {
    setDisplayValue(displayValue + value);
  };

  const handleReset = () => {
    setDisplayValue("");
  };

  const calculate = () => {
    const result = evaluate(displayValue);
    setDisplayValue(result.toString());
  };


  return (
    <div className="App">
      <input type="text" value={displayValue} readOnly />
      <br></br>
      <button onClick={() => handleButtonClick(7)}>7</button>
      <button onClick={() => handleButtonClick(8)}>8</button>
      <button onClick={() => handleButtonClick(9)}>9</button>
      <button onClick={() => handleButtonClick("/")}>/</button>
      <br></br>
      <button onClick={() => handleButtonClick(4)}>4</button>
      <button onClick={() => handleButtonClick(5)}>5</button>
      <button onClick={() => handleButtonClick(6)}>6</button>
      <button onClick={() => handleButtonClick("*")}>*</button>
      <br></br>
      <button onClick={() => handleButtonClick(1)}>1</button>
      <button onClick={() => handleButtonClick(2)}>2</button>
      <button onClick={() => handleButtonClick(3)}>3</button>
      <button onClick={() => handleButtonClick("-")}>-</button>
      <br></br>
      <button onClick={() => handleButtonClick(0)}>0</button>
      <button onClick={() => handleButtonClick(".")}>.</button>
      <button onClick={calculate}>=</button>
      <button onClick={() => handleButtonClick("+")}>+</button>
      <br></br>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
