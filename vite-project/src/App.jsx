// import logo from './react.svg';
import './App.css';
import React, { useState }from "react";
// import Calculator from './Calculator';
function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  return (
    <div
    className="App">
     <h1>Count: {count}</h1>
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
     {/* <Calculator/> */}
    </div>
  )
}

export default App;