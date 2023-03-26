import { useState } from "react";

function Footer() {
  const [active, setActive] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        padding: "60px",
        backgroundColor: !active ? "white" : "red",
      }}
    >
      {active ? <div>Active is true</div> : <div>Active is false</div>}
      <button onClick={() => setActive(!active)}>set active</button>
    </div>
  );
}

export default Footer;
