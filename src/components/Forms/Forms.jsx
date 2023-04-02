import { useState } from "react";

export const Forms = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  function HandleSubmit (event) {
    event.preventDefault(); // отменить стандартное поведение формы
    console.log(event);
    if (!name || !surname) {
      alert('Enter the data!')
    } else {
      alert(`You'r name is: ${name} ${surname}`)
    }
  }
  return (
    <div className='box box-3'>
      <h2>Forms</h2>
      <form action='' onSubmit={HandleSubmit}>
        <label>
          Name:
          <input type='text' name='name' onChange={(event) => setName(event.target.value)} />
        </label>

        <label>
          Surname:
          <input type='text' name='surmane' onChange={(event) => setSurname(event.target.value)} />
        </label>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
