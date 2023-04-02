import { useEffect, useState } from "react";

export const PostByIP = () => {
  const data = {
    name: "John Doe",
    email: "johndoe@example.com",
  };
  const [getData, setData] = useState(null);

  function PostData() {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  function LoadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }

  return (
    <div className='box box-8' style={{ height: "auto" }}>
      <h2>Post</h2>
      <button onClick={LoadUsers}>Load Users</button>
      <button onClick={PostData}>Post User</button>
      <ul>{getData && getData.map((item) => <li key={item.id}>{item.name}</li>)}</ul>
    </div>
  );
};
