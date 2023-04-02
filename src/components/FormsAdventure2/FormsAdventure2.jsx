import { useState } from "react";

export const FormsAdventure2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({ name, email, message });
  };

  return (
    <div className='box box-5'>
      <h2>Work With Forms</h2>
      {!user ? (
        <form onSubmit={handleSubmit} >
          <label>
            Name:
            <input type='text' value={name} onChange={(event) => setName(event.target.value)} required/>
          </label>
          <label>
            Email:
            <input type='email' value={email} onChange={(event) => setEmail(event.target.value)} required/>
          </label>
          <label>
            Message:
            <textarea value={message} onChange={(event) => setMessage(event.target.value)} required/>
          </label>
          <button type='submit'>Send</button>
        </form>
      ) : (
        <div className='user' >
          Form Sended <span id="success"></span>
          <h3>User name: {user.name.toUpperCase()}</h3>
          <p>Email: {user.email.toUpperCase()}</p>
          <p>Comment: {user.message.toUpperCase()}</p>
        </div>
      )}
    </div>
  );
};
