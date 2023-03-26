import { Form } from "../Form/Form";
import "./Person.css";

function Person({ person }) {
  return (
    <li>
      <h2>{person.name}</h2>
      <p>User age is: {person.age}</p>
      <button onClick={() => alert(person.title)}>Show title</button>
      <Form></Form>
    </li>
  );
}

export default Person;
