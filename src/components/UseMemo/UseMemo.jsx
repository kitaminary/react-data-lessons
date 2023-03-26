import { useMemo, useState } from "react";

export const UseMemo = ({ users }) => {
  const userslist = useMemo(() => {
    console.log("useMemo wokrs");
    return users.filter((user) => user.age === 25);
  }, [users]);
  
  const [counter, setCounter] = useState(0);
  return (
    <div style={{backgroundColor: '#8B4513', width: '100%'}}>
      <ul>
        {userslist.map((person) => (
          <li key={person.id}>
            {person.name} is {person.age} years old
          </li>
        ))}
      </ul>
      <div style={{ padding: "30px" }}>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
    </div>
  );
};
