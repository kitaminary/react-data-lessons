import { useCallback, useState } from "react";

export const UseCallback = (props) => {
  const [count, setCount] = useState(0);
  const [currentUser, setCurrentUser] = useState({
    name: "Select User",
    age: "",
  });

  const getUser = useCallback(() => {
    alert("Gettinng user...");
    return props.getUser;
  }, [props.getUser]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px",
        width: "100%",
        backgroundColor: "green",
      }}
    >
      <p>
        Current user:
        {currentUser.name +
          " " +
          (currentUser.age && currentUser.age + " y.o.")}
      </p>
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          setCurrentUser(getUser(event.target.value));
        }}
      >
        <button type="submit">поиск юзера c id 4</button>
      </form>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
