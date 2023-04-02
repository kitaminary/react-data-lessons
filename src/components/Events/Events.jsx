import { useState } from "react";

export const Event = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  function showFullName(name, surname) {
    if (!name || !surname) {
      alert("Write the data");
    } else {
      alert(`You'r name is ${name}, ${surname}`);
    }
  }
  return (
    <div className='box box-2'>
        <h2>Events</h2>
      <input type='text' placeholder='Name' onChange={(event) => setName(event.target.value)} />
      <input type='text' placeholder='Surname' onChange={(event) => setSurname(event.target.value)} />
      <button className='event__btn' onClick={() => showFullName(name, surname)}>
        Show Full Name
      </button>
    </div>
  );
};
