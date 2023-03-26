import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";

function App() {
  const [counter, setCounter] = useState(0);
  return (<>
    <div className="App">
      <Home counter={counter}></Home>
      <button onClick={() => setCounter(counter + 1)}>Counter ++</button>
    </div>
    <Footer></Footer>
    </>
  );
}

export default App;
