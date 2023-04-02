import { useState } from "react";

export const FormsAdventure = () => {
  const [form, setForm] = useState({});

  function HandleSubmit(event) {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;

    setForm((values) => ({ ...values, [name]: value }));
  }
  return (
    <div className='box box-4'>
      <h2>Forms Adventure</h2>
      <form action='' onSubmit={HandleSubmit}>
        <label>
          Enter Booking Date:
          <input name='date' type='date' onChange={HandleSubmit} /> {/* get Date */}
        </label>
        <label>
          Enter subscribe:
          <input name='text' type='text' onChange={HandleSubmit} /> {/* get Text */}
        </label>
        <label>
          Choose Count Of Guest
          <select name='select' id='select' onChange={HandleSubmit}>
            {/* get Select value */}
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
        </label>

        <button type='submit'>Submit</button>
      </form>
      <button onClick={() => console.log(form)}>Log Data</button>
    </div>
  );
};
