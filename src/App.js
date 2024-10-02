import React, {useState} from "react";
import './App.css';

function App() {
  const [number, setNumber] = useState(0);

  const handleIncrement = ()=>{
    setNumber((number)=>number+1);
  };
  const handleDecrement = ()=>{
    setNumber((number)=>number-1);
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {number}</p>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
