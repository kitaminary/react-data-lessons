import { useState } from "react";

export const EventObject = () => {
    const [mess, setMess] = useState('')
  const createMess = (event) => {
    const newMess = "You'r message is: " + event.target.value;
    setMess(newMess);
  };
  const ShowMess = () => {
    alert(mess)
  };
  return (
    <div className='box box-1'>
        <h2>Event OBJ</h2>
      <input type='text' onChange={createMess} placeholder='Mess' /> {/* 2 */}
      <input type='text' onChange={(event) => createMess(event)} placeholder='Mess2' /> {/* 2 */}
      <input type='text' onChange={console.log} placeholder='Log mess' /> {/* 2 */}
      <button onClick={ShowMess}>Show message</button>
    </div>
  );
};
