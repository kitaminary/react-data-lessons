import { useEffect, useState } from "react";
import "./UseEffect.css";

export const UseEffect = ({ theme }) => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  const [newTheme, setNewTheme] = useState(false);

  useEffect(() => {
    // код ефекту, який потрібно виконати при зміні змінної count
    alert("компонент оновлено");
    setNewTheme(theme)
  }, [count, theme]);

  return (
    <div className="effect" style={{ backgroundColor: color }}>
      <div
        style={{
          height: "20px",
          width: "100%",
          backgroundColor: newTheme ? "darkblue" : "white",
        }}
      >
        1
      </div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button
        onClick={() => (color === "red" ? setColor("blue") : setColor("red"))}
      >
        Change color
      </button>
    </div>
  );
};
