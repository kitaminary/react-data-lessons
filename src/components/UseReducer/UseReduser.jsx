import React, { useReducer } from "react";
import { initialState, reducer } from "./reduser";

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNameChange = (event) =>
    dispatch({ type: "SET_NAME", payload: event.target.value });

  const handleNumberChange = (event) =>
    dispatch({ type: "SET_NUMBER", payload: event.target.value });

  return (
    <form
      method="post"
      style={{
        backgroundColor: "#9370DB",
        width: "100%",
        padding: "60px",
      }}
      onSubmit={(event) => {
        event.preventDefault();
        // використання state reduser
        alert("User: " + state.name + " select number: " + state.number);
      }}
    >
      <label>
        Name:
        <input type="text" value={state.name} onChange={handleNameChange} />
      </label>
      <label>
        Number:
        <input
          type="number"
          value={state.number}
          onChange={handleNumberChange}
        />
      </label>
      <button type="submit">send info</button>
    </form>
  );
};
