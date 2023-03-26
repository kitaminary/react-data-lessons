import { useState } from "react";
import "./Form.css";
export const Form = () => {
  const [text, setText] = useState("");
  const [currentPost, setCurrentPost] = useState("");
  return (
    <div>
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          setCurrentPost(text);
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button>Send post</button>
      </form>
      <p>User post: {currentPost}</p>
    </div>
  );
};
