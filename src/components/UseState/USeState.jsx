import { useState } from "react";

export const UseState = () => {
  const [counter, setCounter] = useState(0);
  console.log(counter);
  return (
    <div className="App">
      <header className="App-header">
        <p>{counter}</p>
        <div>
          <button onClick={() => setCounter(counter + 1)}>+</button>
          <button onClick={() => setCounter(counter - 1)}>-</button>
        </div>
      </header>
    </div>
  );
};
